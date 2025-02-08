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
    points: number;
    image?: string;
    video?: string;
}
