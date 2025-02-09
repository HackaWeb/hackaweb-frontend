import { fetchApi } from "./fetchApi.api";
import {
    LoginRequestBody,
    RegisterRequestBody,
} from "./requestBodies/auth.interface";
import { LoginResponse, RegisterResponse } from "./responses/auth.types";
import { GetProfileResponse } from "./responses/user.types";

export const getProfile = async (): Promise<GetProfileResponse> =>
    fetchApi({
        endpoint: "/auth/profile/",
        isAuthRequired: true,
        method: "GET",
    });

export const register = async (
    body: RegisterRequestBody,
): Promise<RegisterResponse> =>
    fetchApi({
        endpoint: "/Auth/register",
        isAuthRequired: false,
        method: "POST",
        body: body,
    });

export const login = async (body: LoginRequestBody): Promise<LoginResponse> =>
    fetchApi({
        endpoint: "/Auth/login",
        isAuthRequired: false,
        method: "POST",
        body: body,
    });
