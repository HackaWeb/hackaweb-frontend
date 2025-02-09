import { BadRequestResponse } from "./common/badRequest.interface";
import { UnathorizedResponse } from "./common/unathorized.interface";
import { UpdateUserResponse } from "./user.types";

interface GetProfileResponseSuccess extends UpdateUserResponse {}

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

export type LoginResponse =
    | LoginUserResponseSuccess
    | BadRequestResponse
    | UnathorizedResponse;
export type RegisterResponse = RegisterUserResponseSuccess | BadRequestResponse;
