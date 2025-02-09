import { fetchApi } from "./fetchApi.api";
import {
    DeleteUserResponse,
    EditUserRequest,
    GetProfileResponse,
    UpdateUserResponse,
} from "./responses/user.types";

export const getProfile = async (): Promise<GetProfileResponse> =>
    fetchApi({
        endpoint: "/profile/",
        isAuthRequired: true,
        method: "GET",
    });

export const updateProfile = async (
    editOptions: EditUserRequest,
): Promise<UpdateUserResponse> =>
    fetchApi({
        endpoint: "/api/user/user-profile/update",
        isAuthRequired: true,
        type: "form",
        body: editOptions,
        method: "POST",
    });

export const deleteProfile = async (): Promise<DeleteUserResponse> =>
    fetchApi({
        endpoint: "/profile/", // getting id from token
        isAuthRequired: true,
        method: "DELETE",
    });
