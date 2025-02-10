export interface GetQuestByOwnerIdBody {
    userId: string;
    pageNumber: number;
    pageSize: number;
}

export interface CreateQuestBody {
    quiz: {
        title: string;
        description: string;
        duration: number;
        questions: {
            title: string;
            type: number;
            options: {
                title: string;
                isCorrect: boolean;
            }[];
        }[];
    };
}
