"use client";

import { useState } from "react";
import { WaitingRoom } from "./WaitingRoom";
import { PlayingGame } from "./Playing";
import { QuestCompletingProps } from "./QuestCompleting.props";
import { Results } from "./Results";
import { QuestionWhileTesting } from "@/types/question.interface";

type Stage = "waiting" | "game" | "results";

export const QuestCompletingPageComponent = ({
    quest,
}: QuestCompletingProps) => {
    const [stage, setStage] = useState<Stage>("waiting");
    const [questions, setQuestions] = useState<QuestionWhileTesting[]>([]);

    const onStartQuestClick = () => {
        try {
            const questions: QuestionWhileTesting[] = [
                {
                    id: "123",
                    title: "Чи столиця Франції Париж?",
                    file: "/question.png",
                    type: 0,
                    options: [
                        {
                            id: "2gfd324fr",
                            title: "True",
                        },
                        {
                            id: "dsnfk32kllgfd",
                            title: "False",
                        },
                    ],
                },
                {
                    id: "12343",
                    title: "Столиця Франції?",
                    file: "/question.png",
                    type: 1,
                    options: [
                        {
                            id: "12пав43",
                            title: "Париж",
                        },
                        {
                            id: "312ке4355",
                            title: "Мадрид",
                        },
                        {
                            id: "12пав43423hgf",
                            title: "Київ",
                        },
                        {
                            id: "312ке4355312gdfh",
                            title: "Варшава",
                        },
                    ],
                },
                {
                    id: "12343",
                    title: "Впшиіть столицю Франції",
                    file: "/question.png",
                    type: 2,
                },
            ];

            setQuestions(questions);
            /* getting questions by quest id */

            /*  */
        } catch (error) {
            console.error(error);
        }
    };

    const onCompleteTest = () => {
        setStage("results");
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
                />
            );
        case "results":
            return <Results />;
        default:
            return <></>;
    }
};
