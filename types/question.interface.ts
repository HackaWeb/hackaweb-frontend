import { QuestionType } from "./question.type";

export interface TrueFalseOption {
    title: "True" | "False";
    isCorrect: boolean;
}

export interface ChoiceOption {
    title: string;
    slug: string;
}

export interface Question {
    id: number;
    title: string;
    type: QuestionType;
    options: ChoiceOption[] | TrueFalseOption[];
    points: number;
    image?: string;
    video?: string;
}
