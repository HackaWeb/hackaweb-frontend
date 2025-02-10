import { UpdateProfileRequestBody } from "./requestBodies/profile.interface";
import { GetProfileResponse, UpdateUserResponse } from "./responses/user.types";

export const getQuest = async (): Promise<GetProfileResponse> =>
    fetchApi({
        endpoint: "/quiz/",
        isAuthRequired: true,
        method: "GET",
    });

export const updateUserProfile = async (
    body: UpdateProfileRequestBody | FormData,
): Promise<UpdateUserResponse> =>
    fetchApi({
        endpoint: "/user/user-profile/update",
        isAuthRequired: true,
        method: "POST",
        body: body,
    });

export const createQuest = async (
    body: LoginRequestBody,
): Promise<LoginResponse> =>
    fetchApi({
        endpoint: "/Auth/login",
        isAuthRequired: false,
        method: "POST",
        body: body,
    });
