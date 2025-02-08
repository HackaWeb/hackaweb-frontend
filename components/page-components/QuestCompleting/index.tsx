"use client";

import { useState } from "react";
import { WaitingRoom } from "./WaitingRoom";
import { PlayingGame } from "./Playing";
import { Question } from "@/types/question.interface";
import { QuestCompletingProps } from "./QuestCompleting.props";

type Stage = "waiting-room" | "game" | "results";

export const QuestCompletingPageComponent = ({
    questions,
}: QuestCompletingProps) => {
    const [stage, setStage] = useState<Stage>("game");

    switch (stage) {
        case "waiting-room":
            return <WaitingRoom />;
        case "game":
            return <PlayingGame questions={questions} />;
    }
};
