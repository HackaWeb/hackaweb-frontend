"use client";

import { useState } from "react";
import { WaitingRoom } from "./WaitingRoom";
import { PlayingGame } from "./Playing";
import { Question } from "@/types/question.interface";

type Stage = "waiting-room" | "game" | "results";

const questions: Question[] = [
    {
        id: 1,
        title: "What is the capital of France?",
        type: "choice",
        points: 10,
        options: [
            { title: "Paris", slug: "paris" },
            { title: "Berlin", slug: "berlin" },
            { title: "London", slug: "london" },
            { title: "Madrid", slug: "madrid" },
        ],
    },
    {
        id: 2,
        title: "What is the capital of Germany?",
        type: "choice",
        points: 10,
        options: [
            { title: "Paris", slug: "paris" },
            { title: "Berlin", slug: "berlin" },
            { title: "London", slug: "london" },
            { title: "Madrid", slug: "madrid" },
        ],
    },
    {
        id: 3,
        title: "What is the capital of Spain?",
        type: "choice",
        points: 10,
        options: [
            { title: "Paris", slug: "paris" },
            { title: "Berlin", slug: "berlin" },
            { title: "London", slug: "london" },
            { title: "Madrid", slug: "madrid" },
        ],
    },
];

export const QuestCompletingPageComponent = () => {
    const [stage, setStage] = useState<Stage>("game");

    switch (stage) {
        case "waiting-room":
            return <WaitingRoom />;
        case "game":
            return <PlayingGame questions={questions} />;
    }
};
