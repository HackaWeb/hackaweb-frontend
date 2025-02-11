import { BadRequestResponse } from "./common/badRequest.interface";
import { UnathorizedResponse } from "./common/unathorized.interface";

export interface CreateFeedbackResponseSuccess {
    success: true;
}

export type CreateFeedbackResponse =
    | BadRequestResponse
    | UnathorizedResponse
    | CreateFeedbackResponseSuccess;
