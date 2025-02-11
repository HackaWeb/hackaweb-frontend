"use client";

import { useEffect, useState } from "react";
import { WaitingRoom } from "./WaitingRoom";
import { PlayingGame } from "./Playing";
import { Results } from "./Results";
import { useQuiz } from "@/hooks/useQuiz";
import { QuestCompletingProps } from "./QuestCompleting.props";
import { QuestionWhileTesting } from "@/types/question.interface";
import { getQuestQuestionsByQuestId } from "@/api/quests";
import { toast } from "react-toastify";

type Stage = "waiting" | "game" | "results";

export const QuestCompletingPageComponent = ({
    quest,
}: QuestCompletingProps) => {
    const [stage, setStage] = useState<Stage>("waiting");
    const [questions, setQuestions] = useState<QuestionWhileTesting[]>([]);
    const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
    const [timeLeft, setTimeLeft] = useState<number | null>(null);

    // WebSocket-контроллер викторины
    const { startQuiz, submitAnswers, time, result, status } = useQuiz();

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
            const response = await getQuestQuestionsByQuestId(quest.id);
            const data: QuestionWhileTesting[] = await response.json();

            if (data && data.length > 0) {
                setQuestions(data);
                setStage("game");

                // Запускаем квиз по ID
                startQuiz(quest.id);
            } else {
                toast.error(
                    "Помилка при отриманні питань, спробуйте пізніше ще раз",
                );
            }
        } catch (error) {
            console.error("Ошибка при получении вопросов:", error);
        }
    };

    const onCompleteTest = () => {
        submitAnswers(quest.id, userAnswers);
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
