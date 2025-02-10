import { Profile, User } from "@/types/user.interface";
import { BadRequestResponse } from "./common/badRequest.interface";
import { UnathorizedResponse } from "./common/unathorized.interface";

export interface DeleteUserRequestSuccess {}

export interface UpdateUserResponseSuccess {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
}

export interface UpdateUserRequest extends FormData {}

export interface GetUserResponseSuccess extends User {}

export type GetProfileResponse =
    | GetUserResponseSuccess
    | BadRequestResponse
    | UnathorizedResponse;

export type UpdateUserResponse =
    | UpdateUserResponseSuccess
    | BadRequestResponse
    | UnathorizedResponse;

export type DeleteUserResponse = DeleteUserResponseSuccess | BadRequestResponse;

interface GetProfileResponseSuccess {
    email: string;
    id: string;
}

// getProfile(token)
// Login/token
// User has isAdmin field
// If isAdmin, then we can do everything with other's profile
