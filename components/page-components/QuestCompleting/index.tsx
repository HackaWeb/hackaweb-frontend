"use client";

import { useState } from "react";
import { WaitingRoom } from "./WaitingRoom";
import { PlayingGame } from "./Playing";
import { QuestCompletingProps } from "./QuestCompleting.props";
import { Results } from "./Results";

type Stage = "waiting-room" | "game" | "results";

export const QuestCompletingPageComponent = ({
    questions,
    completingType,
}: QuestCompletingProps) => {
    const [stage, setStage] = useState<Stage>("waiting-room");

    const onStartQuestClick = () => {
        setStage("game");
    };

    const onCompleteTest = () => {
        setStage("results");
    };

    switch (stage) {
        case "waiting-room":
            return (
                <WaitingRoom
                    completingType={completingType}
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
    }
};
