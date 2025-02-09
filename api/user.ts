import { fetchApi } from "./fetchApi.api";
import {
    GetProfileResponse,
    LoginResponse,
    LoginUserRequest,
    RegisterResponse,
    RegisterUserRequest,
} from "./responses/auth.types";
import {
    DeleteUserResponse,
    EditUserRequest,
    UpdateUserResponse,
} from "./responses/user.types";

export const getProfile = async (): Promise<GetProfileResponse> =>
    fetchApi({
        endpoint: "/profile/",
        isAuthRequired: true,
        method: "GET",
    });

export const editUserProfile = async (
    editOptions: EditUserRequest,
): Promise<UpdateUserResponse> =>
    fetchApi({
        endpoint: "/profile/",
        isAuthRequired: true,
        method: "POST",
        body: editOptions,
    });

export const deleteUserProfile = async (): Promise<DeleteUserResponse> =>
    fetchApi({
        endpoint: "/profile/", // getting id from token
        isAuthRequired: true,
        method: "DELETE",
    });
