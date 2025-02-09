import { CompletedQuest, Quest } from "./quest.interface";

export interface User {
    id: string;
    email: string;
    nickname: string;
    // nickname => first/last name
    rating: number;
    avatar: string;
}

export interface Profile extends User {
    createdQuests: Quest[];
    completedQuests: CompletedQuest[];
}
