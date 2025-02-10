import { fetchApi } from "./fetchApi.api";
import { UpdateProfileRequestBody } from "./requestBodies/profile.interface";
import {
    DeleteUserResponse,
    GetProfileResponse,
    UpdateUserResponse,
} from "./responses/user.types";

export const getProfile = async (): Promise<GetProfileResponse> =>
    fetchApi({
        endpoint: "/profile/",
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

export const deleteUserProfile = async (): Promise<DeleteUserResponse> =>
    fetchApi({
        endpoint: "/profile/",
        isAuthRequired: true,
        method: "DELETE",
    });
