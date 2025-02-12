import { Feedback } from "./feedback.interface";
import { Question, QuestionWhileTesting } from "./question.interface";
import { User } from "./user.interface";

export enum SortType {
    Rating = 0,
    NumberOfPasses = 1,
    Alphabet = 2,
    AuthorRating = 3,
}

export interface Quest {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    rate: number;
    imageUrl: string;
    passCount: number;
    duration: number;
    owner: User;
    feedbacks: Feedback[];
    questions: Question[] | QuestionWhileTesting[] | undefined;
}

export interface QuestWithoutQuestions extends Quest {
    questions: undefined;
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
