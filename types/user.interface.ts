import { CompletedQuest, Quest } from "./quest.interface";

export interface User {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    rating: number;
    avatar: string | null;
    isAdmin: boolean;
}

export interface Profile extends User {
    createdQuests: Quest[];
    completedQuests: CompletedQuest[];
}
