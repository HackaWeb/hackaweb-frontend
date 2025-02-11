import { Feedback } from "@/types/feedback.interface";
import { LeaderboardUser, Quest } from "@/types/quest.interface";
import { User } from "@/types/user.interface";

export interface CreateQuestResponse {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    imageUrl: string;
    rate: number;
    passCount: number;
    ownerId: string;
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
    }[];
}

export type GetQuestsResponse = { quizzes: Quest[] };
export interface uploadMediaResponse {
    isSuccess: boolean;
    errors: string[];
}
export interface GetQuestByOwnerIdResponse {
    pageNumber: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    items: Quest[];
}

export type GetCompletedQuestByOwnerIdResponse = Quest[];
export interface GetQuestByIdResponse {
    quiz: Quest;
}
