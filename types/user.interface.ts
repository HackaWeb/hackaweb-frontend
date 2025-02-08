import { Quest } from "./quest.interface";

export interface User {
    id: string;
    email: string;
    nickname: string;
    rating: number;
}

export interface CompletedQuest extends Quest {
    correctness: number;
}

export interface Profile extends User {
    questsCompleted: number;
    createdQuests: Quest[];
    completedQuests: CompletedQuest[];
}
