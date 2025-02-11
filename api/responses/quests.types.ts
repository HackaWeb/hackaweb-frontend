import { Feedback } from "@/types/feedback.interface";
import {
    LeaderboardUser,
    Quest,
    QuestWithoutQuestions,
} from "@/types/quest.interface";
import { User } from "@/types/user.interface";

export interface CreateQuestResponse {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    imageUrl: string;
    rate: number;
    passCount: number;
    owner: User;
    duration: number;
    questions: {
        id: string;
        text: string;
        mediaUrl: string;
        type: number;
        choiceOptions: {
            id: string;
            title: string;
            isCorrect: boolean;
        }[];
    }[];
    feedbacks: {
        id: string;
        text: string;
        rate: number;
        createdAt: string;
        author: User;
    }[];
}

export type GetQuestsResponse = { quizzes: Quest[] };
export interface uploadMediaResponse {
    isSuccess: boolean;
    errors: string[];
}
export interface GetQuestByOwnerIdResponse {
    quizzes: Quest[];
}

export type GetCompletedQuestByOwnerIdResponse = Quest[];
export interface GetQuestByIdResponse {
    quiz: CreateQuestResponse;
}

export interface GetQuestByIdWithoutQuestionsResponse
    extends QuestWithoutQuestions {}
