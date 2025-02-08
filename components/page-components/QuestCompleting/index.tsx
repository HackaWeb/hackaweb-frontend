"use client";

import { useState } from "react";
import { WaitingRoom } from "./WaitingRoom";
import { PlayingGame } from "./Playing";

type Stage = "waiting-room" | "game" | "results";

export const QuestCompletingPageComponent = () => {
    const [stage, setStage] = useState<Stage>("game");

    switch (stage) {
        case "waiting-room":
            return <WaitingRoom />;
        case "game":
            return <PlayingGame />;
    }
};
