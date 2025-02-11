import { fetchApi } from "./fetchApi";
import {
    CreateQuestBody,
    GetQuestsQuery,
    GetQuestByOwnerIdBody,
} from "./requestBodies/quests.interface";
import {
    CreateQuestResponse,
    GetCompletedQuestByOwnerIdResponse,
    GetQuestByIdResponse,
    GetQuestByIdWithoutQuestionsResponse,
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

export const getQuestByIdWithoutQuestions = async (
    questId: string,
): Promise<GetQuestByIdWithoutQuestionsResponse> =>
    fetchApi({
        endpoint: `/quiz/without-questions/${questId}`,
        isAuthRequired: true,
        method: "GET",
    });

export const getQuestsByOwnerId = async (
    userId?: string,
): Promise<GetQuestByOwnerIdResponse> =>
    fetchApi({
        endpoint: `/quiz/user/${userId}`,
        isAuthRequired: false,
        method: "GET",
    });

export const getQuestQuestionsByQuestId = async (
    questId: string,
): Promise<any> =>
    fetchApi({
        endpoint: `/quiz/questions/${questId}`,
        isAuthRequired: true,
        method: "GET",
    });

export const getCompletedQuestsByOwnerId = async (
    userId?: string,
): Promise<GetCompletedQuestByOwnerIdResponse> =>
    fetchApi({
        endpoint: `/quiz/completed/${userId}`,
        isAuthRequired: false,
        method: "GET",
    });

export const getQuests = async ({
    sortType,
    titleFilter,
}: GetQuestsQuery): Promise<GetQuestsResponse> =>
    fetchApi({
        endpoint: `/quiz/all${sortType ? `?sortType=${sortType}` : ""}${
            titleFilter && titleFilter.length > 2
                ? (sortType ? "&" : "?") + `titleFilter=${titleFilter}`
                : ""
        }`,
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
