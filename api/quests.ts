import { fetchApi } from "./fetchApi";
import { GetQuestByOwnerIdBody } from "./requestBodies/quests.interface";
import {
    GetQuestByIdResponse,
    GetQuestByOwnerIdResponse,
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

export const createQuest = async (body: FormData) =>
    fetchApi({
        endpoint: "/quiz/",
        isAuthRequired: true,
        method: "POST",
        body,
    });
