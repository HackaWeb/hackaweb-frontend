import { QuestionType } from "./question.type";

export interface SelectOption {
    title: string;
    value: string;
}

export interface CustomSelectOption extends SelectOption {
    value: QuestionType;
}
