import { fetchApi } from "./fetchApi";
import {
    CreateQuestBody,
    GetQuestByOwnerIdBody,
} from "./requestBodies/quests.interface";
import {
    CreateQuestResponse,
    GetQuestByIdResponse,
    GetQuestByOwnerIdResponse,
    uploadQuestMediaResponse,
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
    userId: string,
    body: GetQuestByOwnerIdBody,
): Promise<GetQuestByOwnerIdResponse> =>
    fetchApi({
        endpoint: `/quiz/${userId}}`,
        isAuthRequired: true,
        method: "POST",
        body,
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
): Promise<uploadQuestMediaResponse> =>
    fetchApi({
        endpoint: `/quiz/media/upload${questId}`,
        isAuthRequired: true,
        method: "POST",
        body,
    });
