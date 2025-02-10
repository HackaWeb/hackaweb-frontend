import { fetchApi } from "./fetchApi";
import {
    DeleteUserResponse,
    GetProfileResponse,
    UpdateUserResponse,
} from "./responses/user.types";

export const getProfile = async (
    userId?: string,
): Promise<GetProfileResponse> =>
    fetchApi({
        endpoint: `/user/user-profile${userId ? `?userId=${userId}` : ""}`,
        isAuthRequired: true,
        method: "GET",
    });

export const updateUserProfile = async (
    body: FormData,
): Promise<UpdateUserResponse> =>
    fetchApi({
        endpoint: "/user/user-profile",
        isAuthRequired: true,
        method: "PUT",
        body,
    });

export const deleteUserProfile = async (
    userId?: string,
): Promise<DeleteUserResponse> =>
    fetchApi({
        endpoint: `/user/user-profile${userId ? `?userId=${userId}` : ""}`,
        isAuthRequired: true,
        method: "DELETE",
    });
