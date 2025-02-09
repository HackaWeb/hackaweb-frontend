import { fetchApi } from "./fetchApi.api";
import {
    LoginResponse,
    LoginUserRequest,
    RegisterResponse,
    RegisterUserRequest,
} from "./responses/auth.types";
import { GetProfileResponse } from "./responses/user.types";

export const getProfile = async (): Promise<GetProfileResponse> =>
    fetchApi({
        endpoint: "/api/user/user-profile/",
        isAuthRequired: true,
        method: "GET",
    });

export const register = async (
    registerOptions: RegisterUserRequest,
): Promise<RegisterResponse> =>
    fetchApi({
        endpoint: "/api/auth/register",
        isAuthRequired: false,
        method: "POST",
        body: registerOptions,
    });

export const login = async (
    loginOptions: LoginUserRequest,
): Promise<LoginResponse> =>
    fetchApi({
        endpoint: "/api/auth/login",
        isAuthRequired: false,
        method: "POST",
        body: loginOptions,
    });
