export interface GetQuestByOwnerIdBody {
    pageNumber: number;
    pageSize: number;
}

export interface CreateQuestBody {
    quiz: {
        title: string;
        description: string;
        duration: number;
        questions: {
            questionId: string;
            title: string;
            type: number;
            options: {
                title: string;
                isCorrect: boolean;
            }[];
        }[];
    };
}
