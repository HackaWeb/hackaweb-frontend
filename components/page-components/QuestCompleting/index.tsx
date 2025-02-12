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

/* const mockQuestions: QuestionWhileTesting[] = [
    {
        id: "1",
        text: "Скільки буде 2+2?",
        quizId: "123re32fdfd",
        type: 1,
        options: [
            { questionId: "1", title: "4", id: "13dasfds" },
            { id: "2fd34fds", title: "5", questionId: "13dasfds" },
            { id: "3", title: "6", questionId: "13dasfds" },
            { id: "4", title: "7", questionId: "13dasfds" },
        ],
    },
]; */

export const QuestCompletingPageComponent = ({
    quest,
    user,
}: QuestCompletingProps) => {
    const [stage, setStage] = useState<Stage>("waiting");
    const [questions, setQuestions] = useState<QuestionWhileTesting[]>([]);
    const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
    const [timeLeft, setTimeLeft] = useState<number | null>(null);

    const { startQuiz, submitAnswers, time, result, status } = useQuiz();

    useEffect(() => {
        setTimeLeft(time);
    }, [time]);
    console.log(timeLeft);

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

                startQuiz(quest.id);
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
