import { fetchApi } from "./fetchApi";
import { GetLeaderboardByQuestIdResponse } from "./responses/leaderboard.types";

export const getLeaderboardByQuestId = async (
    questId: string,
): Promise<GetLeaderboardByQuestIdResponse> =>
    fetchApi({
        endpoint: `/leaderboard/${questId}`,
        isAuthRequired: false,
        method: "GET",
    });
