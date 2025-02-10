export interface GetQuestByIdResponse {
    pageNumber: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    items: [
        {
            id: string;
            title: string;
            imageUrl: string; //
            duration: number;
            rate: number;
            taskCount: number; //
        },
    ];
}
export interface GetQuestByOwnerIdResponse {
    quiz: {
        id: string;
        title: string;
        description: string;
        createdAt: string;
        imageUrl: string; //
        rate: number;
        passCount: number; //
        ownerId: string;
        duration: number;
        questions: [
            {
                id: string;
                text: string; // title?
                mediaUrl: string;
                type: number;
                choiceOptions: [
                    {
                        id: string;
                        title: string;
                        isCorrect: boolean;
                    },
                ];
            },
        ];
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
