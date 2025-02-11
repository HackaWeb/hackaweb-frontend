import { Question, QuestionWhileTesting } from "./question.interface";
import { Feedback } from "./Feedback.interface";
import { User } from "./user.interface";

export interface Quest {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    file: string;
    rate: number;
    duration: number;
    ownerId: string;
    feedbacks: Feedback[];
    questions: Question[] | QuestionWhileTesting[] | undefined;
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
