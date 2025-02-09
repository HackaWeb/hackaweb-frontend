"use client";

import { useState } from "react";
import { WaitingRoom } from "./WaitingRoom";
import { PlayingGame } from "./Playing";
import { QuestCompletingProps } from "./QuestCompleting.props";
import { Results } from "./Results";

type Stage = "waiting" | "game" | "results";

export const QuestCompletingPageComponent = ({
    questions,
}: QuestCompletingProps) => {
    const [stage, setStage] = useState<Stage>("waiting");

    const onStartQuestClick = () => {
        setStage("game");
    };

    const onCompleteTest = () => {
        setStage("results");
    };

    switch (stage) {
        case "waiting":
            return (
                <WaitingRoom
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
