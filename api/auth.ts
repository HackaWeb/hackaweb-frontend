import { fetchApi } from "./fetchApi.api";
import {
    GetProfileResponse,
    LoginResponse,
    LoginUserRequest,
    RegisterResponse,
    RegisterUserRequest,
} from "./responses/auth.types";

export const getProfile = async (): Promise<GetProfileResponse> =>
    fetchApi({
        endpoint: "/auth/profile/",
        isAuthRequired: true,
        method: "GET",
    });

export const register = async (
    registerOptions: RegisterUserRequest,
): Promise<RegisterResponse> =>
    fetchApi({
        endpoint: "/register",
        isAuthRequired: false,
        method: "POST",
        body: registerOptions,
    });

export const login = async (
    loginOptions: LoginUserRequest,
): Promise<LoginResponse> =>
    fetchApi({
        endpoint: "/login",
        isAuthRequired: false,
        method: "POST",
        body: loginOptions,
    });
