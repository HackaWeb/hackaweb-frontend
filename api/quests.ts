import { fetchApi } from "./fetchApi";
import {
    CreateQuestBody,
    GetQuestByOwnerIdBody,
} from "./requestBodies/quests.interface";
import {
    CreateQuestResponse,
    GetCompletedQuestByOwnerIdResponse,
    GetQuestByIdResponse,
    GetQuestByOwnerIdResponse,
    GetQuestsResponse,
    uploadMediaResponse,
} from "./responses/quests.types";

export const getQuestById = async (
    questId: string,
): Promise<GetQuestByIdResponse> =>
    fetchApi({
        endpoint: `/quiz/${questId}`,
        isAuthRequired: true,
        method: "GET",
    });

export const getQuestsByOwnerId = async (
    body: GetQuestByOwnerIdBody,
    userId?: string,
): Promise<GetQuestByOwnerIdResponse> =>
    fetchApi({
        endpoint: `/quiz/${userId}`,
        isAuthRequired: false,
        method: "POST",
        body,
    });

export const getCompletedQuestsByOwnerId = async (
    userId?: string,
): Promise<GetCompletedQuestByOwnerIdResponse> =>
    fetchApi({
        endpoint: `/quiz/${userId}`,
        isAuthRequired: false,
        method: "POST",
    });

export const getQuests = async (): Promise<GetQuestsResponse> =>
    fetchApi({
        endpoint: "/quiz/all",
        isAuthRequired: false,
        method: "GET",
    });

export const createQuest = async (
    body: CreateQuestBody,
): Promise<CreateQuestResponse> =>
    fetchApi({
        endpoint: "/quiz/",
        isAuthRequired: true,
        method: "POST",
        body,
    });

export const uploadQuestMedia = async (
    questId: string,
    body: FormData,
): Promise<uploadMediaResponse> =>
    fetchApi({
        endpoint: `/quiz/media/upload/${questId}`,
        isAuthRequired: true,
        method: "POST",
        body,
    });

export const uploadQuestionMedia = async (
    questionId: string,
    body: FormData,
): Promise<uploadMediaResponse> =>
    fetchApi({
        endpoint: `/quiz/media/question/upload/${questionId}`,
        isAuthRequired: true,
        method: "POST",
        body,
    });
