import { Question, QuestionWhileTesting } from "./question.interface";
import { Review } from "./review.interface";
import { User } from "./user.interface";

export interface Quest {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    rating: number;
    file: string;
    duration: number;
    owner: User;
    reviews: Review[];
    questions: Question[] | QuestionWhileTesting[];
    leaderboard: LeaderboardUser[];
}

export interface CompletedQuest {
    user: User;
    quest: Quest;
    accuracy: number;
    timeSpent: number;
    dateCompleted: string;
}

export interface LeaderboardUser {
    user: User;
    accuracy: number;
    timeSpent: number;
    dateCompleted: string;
}
