"use client";

import { useEffect, useState } from "react";
import { WaitingRoom } from "./WaitingRoom";
import { PlayingGame } from "./Playing";
import { Results } from "./Results";
import { useQuiz } from "@/hooks/useQuiz";
import { QuestCompletingProps } from "./QuestCompleting.props";
import { QuestionWhileTesting } from "@/types/question.interface";
import { getQuestionsByQuestId } from "@/api/quests";
import { toast } from "react-toastify";

type Stage = "waiting" | "game" | "results";

export const QuestCompletingPageComponent = ({
    quest,
    user,
}: QuestCompletingProps) => {
    const [stage, setStage] = useState<Stage>("waiting");
    const [questions, setQuestions] = useState<QuestionWhileTesting[]>([]);
    const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
    const [timeLeft, setTimeLeft] = useState<number | null>(null);

    const { startQuiz, submitAnswers, time, result, status } = useQuiz();

    // Оновлюємо залишковий час з хука
    useEffect(() => {
        setTimeLeft(time);
    }, [time]);

    useEffect(() => {
        if (status === "completed" && result) {
            setStage("results");
        }
    }, [status, result]);

    const onStartQuestClick = async () => {
        try {
            const response = await getQuestionsByQuestId(quest.id);

            if (response && response.length) {
                setQuestions(response);
                setStage("game");

                // Передаємо quest.id як quizId
                startQuiz(quest.id, user.id); // Тепер це правильно
            } else {
                toast.error(
                    "Помилка при отриманні питань, спробуйте пізніше ще раз",
                );
            }
        } catch (error) {
            console.error(error);
            toast.error(
                "Помилка при отриманні питань, спробуйте пізніше ще раз",
            );
        }
    };

    const onCompleteTest = () => {
        // Передаємо quest.id як quizId для надсилання відповідей
        submitAnswers(quest.id, userAnswers, user.id); // Тепер це правильно
    };

    switch (stage) {
        case "waiting":
            return (
                <WaitingRoom
                    quest={quest}
                    onStartQuestClick={onStartQuestClick}
                />
            );

        case "game":
            return (
                <PlayingGame
                    user={user}
                    questions={questions}
                    onCompleteTest={onCompleteTest}
                    setUserAnswers={setUserAnswers}
                    timeLeft={timeLeft}
                />
            );

        case "results":
            return <Results quest={quest} result={result} />;

        default:
            return <></>;
    }
};
