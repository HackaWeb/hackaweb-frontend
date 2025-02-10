import { Question } from "@/types/question.interface";

export interface CreateQuestBody {
    title: string;
    description: string;
    duration: number;
    file: string;
    questions: Question[];
}

export interface GetQuestByOwnerIdBody {
    userId: string;
    pageNumber: number;
    pageSize: number;
}
