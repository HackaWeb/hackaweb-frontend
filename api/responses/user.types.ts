import { User } from "@/types/user.interface";
import { BadRequestResponse } from "./common/badRequest.interface";
import { UnathorizedResponse } from "./common/unathorized.interface";
import { DeleteResponseSuccess } from "./common/deleteSuccess.interface";

export interface UpdateUserResponseSuccess {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
}

export interface GetUserResponseSuccess extends User {}

export type GetProfileResponse =
    | GetUserResponseSuccess
    | BadRequestResponse
    | UnathorizedResponse;

export type UpdateUserResponse =
    | UpdateUserResponseSuccess
    | BadRequestResponse
    | UnathorizedResponse;

export type DeleteUserResponse = DeleteResponseSuccess | BadRequestResponse;
