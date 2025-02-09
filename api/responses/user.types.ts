import { User } from "@/types/user.interface";
import { BadRequestResponse } from "./common/badRequest.interface";
import { UnathorizedResponse } from "./common/unathorized.interface";

export interface UpdateUserResponseSuccess {
    user: User;
}

export interface DeleteUserResponseSuccess {
    resolved: true;
}

export type UpdateUserResponse =
    | UpdateUserResponseSuccess
    | BadRequestResponse
    | UnathorizedResponse;

export type DeleteUserResponse = DeleteUserResponseSuccess | BadRequestResponse;

interface GetProfileResponseSuccess {
    email: string;
    id: string;
}

export type GetProfileResponse =
    | GetProfileResponseSuccess
    | UnathorizedResponse;

// getProfile(token)
// Login/token
// User has isAdmin field
// If isAdmin, then we can do everything with other's profile
