import { fetchApi } from "./fetchApi";
import { CreateFeeedbackRequestBody } from "./requestBodies/feedbacks.interface";
import { CreateFeedbackResponse } from "./responses/feedbacks.types";

export const createFeedback = async (
    body: CreateFeeedbackRequestBody,
): Promise<CreateFeedbackResponse> =>
    fetchApi({
        endpoint: "/feedback/",
        isAuthRequired: true,
        method: "POST",
        body,
    });
