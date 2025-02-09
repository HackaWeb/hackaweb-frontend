import { QuestionType } from "./question.type";

export interface ChoiceOption {
    title: string;
    slug: string;
}

export interface Question {
    id: number;
    title: string;
    type: QuestionType;
    options?: ChoiceOption[];
    image?: string;
    video?: string;
}
