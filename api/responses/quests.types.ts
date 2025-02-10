import { LeaderboardUser } from "@/types/quest.interface";

export interface GetQuestByOwnerIdResponse {
    pageNumber: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    items: [
        {
            id: string;
            title: string;
            file: string;
            duration: number;
            rate: number;
            taskCount: number;
        },
    ];
}
export interface GetQuestByIdResponse {
    quiz: {
        id: string;
        title: string;
        description: string;
        createdAt: string;
        file: string;
        rate: number;
        ownerId: string;
        duration: number;
        questions: [
            {
                id: string;
                title: string;
                mediaUrl: string;
                type: number;
                choiceOptions: [
                    {
                        id: number;
                        title: string;
                        isCorrect: boolean;
                    },
                ];
            },
        ];
        leaderboard: LeaderboardUser[]; //Чекаємо Фікс від Сергія
        feedbacks: [
            {
                id: string;
                text: string;
                rate: number;
                createdAt: string;
            },
        ];
    };
}
