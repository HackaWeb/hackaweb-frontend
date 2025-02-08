import { fetchApi } from "./fetchApi.api";
import { GetProfileResponse } from "./responses/auth.types";

export const getProfile = async (): Promise<GetProfileResponse> =>
    fetchApi({
        endpoint: "/auth/profile/",
        isAuthRequired: true,
        method: "GET",
    });
