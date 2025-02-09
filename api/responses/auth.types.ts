import { BadRequestResponse } from "./common/badRequest.interface";
import { UnathorizedResponse } from "./common/unathorized.interface";

interface GetProfileResponseSuccess {
    email: string;
    id: string;
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

export type LoginResponse = LoginUserResponseSuccess | BadRequestResponse;
export type RegisterResponse = RegisterUserResponseSuccess | BadRequestResponse;

export type GetProfileResponse =
    | GetProfileResponseSuccess
    | UnathorizedResponse;
