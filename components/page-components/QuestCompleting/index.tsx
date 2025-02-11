"use client";

import { useState } from "react";
import { WaitingRoom } from "./WaitingRoom";
import { PlayingGame } from "./Playing";
import { QuestCompletingProps } from "./QuestCompleting.props";
import { Results } from "./Results";
import { QuestionWhileTesting } from "@/types/question.interface";
import { getQuestQuestionsByQuestId } from "@/api/quests";

type Stage = "waiting" | "game" | "results";

export const QuestCompletingPageComponent = ({
    quest,
}: QuestCompletingProps) => {
    const [stage, setStage] = useState<Stage>("waiting");
    const [questions, setQuestions] = useState<QuestionWhileTesting[]>([]);

    const onStartQuestClick = async () => {
        try {
            const response = await getQuestQuestionsByQuestId(quest.id);
            console.log(response)
            /* setStage("game");
            setQuestions(questions); */
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
            return <Results quest={quest} />;
        default:
            return <></>;
    }
};
