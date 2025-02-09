import { Question } from "./question.interface";
import { Review } from "./review.interface";
import { User } from "./user.interface";

export interface Quest {
    id: string;
    title: string;
    description: string;
    rating: number;
    imageUrl: string;
    createdAt: string;
    timesPlayed: number;
    timeLimit: number;
    owner: User;
    reviews: Review[];
    questions: Question[];
}

export interface CompletedQuest extends Quest {
    accuracy: number;
}
