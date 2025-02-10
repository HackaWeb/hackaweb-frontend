import { fetchApi } from "./fetchApi.api";
import { UpdateProfileRequestBody } from "./requestBodies/profile.interface";
import {
    DeleteUserRequest,
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
        endpoint: "/user/user-profile",
        isAuthRequired: true,
        method: "PUT",
        body,
    });

export const deleteUserProfile = async (
    body: DeleteUserRequest = null,
): Promise<DeleteUserResponse> =>
    fetchApi({
        endpoint: "/user/user-profile",
        isAuthRequired: true,
        method: "DELETE",
        body,
    });
