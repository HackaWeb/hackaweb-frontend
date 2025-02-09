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

export const updateUserProfile = async (
    editOptions: EditUserRequest,
): Promise<UpdateUserResponse> =>
    fetchApi({
        endpoint: "/api/User/update-profile/",
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
