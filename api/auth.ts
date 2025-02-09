import { fetchApi } from "./fetchApi.api";
import {
    LoginRequestBody,
    RegisterRequestBody,
} from "./requestBodies/auth.interface";
import {
    LoginResponse,
    LoginUserRequest,
    RegisterResponse,
    RegisterUserRequest,
} from "./responses/auth.types";
import { GetProfileResponse } from "./responses/user.types";

export const getProfile = async (): Promise<GetProfileResponse> =>
    fetchApi({
        endpoint: "/user/user-profile/",
        isAuthRequired: true,
        method: "GET",
    });

export const register = async (
    body: RegisterRequestBody,
): Promise<RegisterResponse> =>
    fetchApi({
        endpoint: "/auth/register",
        isAuthRequired: false,
        method: "POST",
        body: body,
    });

export const login = async (body: LoginRequestBody): Promise<LoginResponse> =>
    fetchApi({
        endpoint: "/auth/login",
        isAuthRequired: false,
        method: "POST",
        body: body,
    });
