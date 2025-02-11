import { Feedback } from "./feedback.interface";
import { Question, QuestionWhileTesting } from "./question.interface";
import { User } from "./user.interface";

export interface Quest {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    rate: number;
    imageUrl: string;
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
