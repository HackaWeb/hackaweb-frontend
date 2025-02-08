import { UnathorizedResponse } from "./common/unathorized.interface";

interface GetProfileResponseSuccess {
    email: string;
    id: string;
}

export type GetProfileResponse =
    | GetProfileResponseSuccess
    | UnathorizedResponse;
