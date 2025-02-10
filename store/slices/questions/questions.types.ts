import { Question } from "@/types/question.interface";

export type QuestionsState = {
    questions: Question[];
    currentEditingId: CurrentEditingIdType;
};

export type CurrentEditingIdType = string | null;
