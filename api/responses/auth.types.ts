import { UnathorizedResponse } from "./common/unathorized.interface";

interface GetProfileResponseSuccess {
    email: string;
    id: string;
}

interface RequestResultFailure {
    isSuccess: boolean;
    errors: string[];
}

export interface RegisterUserRequest {
    email: string;
    password: string;
}
export interface RegisterUserResponseSuccess {
    jwtToken: string;
}

export interface LoginUserRequest {
    email: string;
    password: string;
}

export interface LoginUserResponseSuccess {
    jwtToken: string;
}

export type LoginResponse = LoginUserResponseSuccess | RequestResultFailure;
export type RegisterResponse =
    | RegisterUserResponseSuccess
    | RequestResultFailure;

export type GetProfileResponse =
    | GetProfileResponseSuccess
    | UnathorizedResponse;
