"use client";

import { useState } from "react";
import { WaitingRoom } from "./WaitingRoom";
import { PlayingGame } from "./Playing";
import { Question } from "@/types/question.interface";
import { QuestCompletingProps } from "./QuestCompleting.props";
import { Results } from "./Results";

type Stage = "waiting-room" | "game" | "results";

export const QuestCompletingPageComponent = ({
    questions,
}: QuestCompletingProps) => {
    const [stage, setStage] = useState<Stage>("results");

    switch (stage) {
        case "waiting-room":
            return <WaitingRoom />;
        case "game":
            return <PlayingGame questions={questions} />;
        case "results":
            return <Results />;
    }
};
