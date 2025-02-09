import { Review } from "./review.interface";
import { User } from "./user.interface";

export interface Quest {
    id: string;
    title: string;
    description: string;
    rating: number;
    imageUrl: string;
    createdAt: string;
    owner: User;
    timesPlayed: number;
    timeLimit: number;
    reviews?: Review[];
}

export interface CompletedQuest extends Quest {
    correctness: number;
}
