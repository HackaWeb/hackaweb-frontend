import { CompletedQuest, Quest } from "./quest.interface";

export interface User {
    id: string;
    email: string;
    nickname: string;
    rating: number;
    avatar: string;
}

export interface Profile extends User {
    questsCompleted: number;
    createdQuests: Quest[];
    completedQuests: CompletedQuest[];
}
