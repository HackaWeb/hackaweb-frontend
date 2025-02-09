import { Question } from "@/types/question.interface";

export type QuestionsState = {
    questions: Question[];
    currentEditingId: number | null;
};
