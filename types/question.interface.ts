import { QuestionType } from "./question.type";

export interface ChoiceOption {
    title: string;
    isCorrect: boolean;
}

export interface ChoiceOptionWhileTesting {
    title: string;
}

export interface Question {
    id: number;
    title: string;
    type: QuestionType;
    options: ChoiceOption[];
    image?: string;
    video?: string;
}

export interface QuestionWhileTesting {
    id: number;
    title: string;
    type: QuestionType;
    options?: ChoiceOptionWhileTesting[];
    image?: string;
    video?: string;
}

// якщо тип інпут, options: [{ title: string, isCorrect: true }]
// якщо тип choice, то choice:  [{ title: string, isCorrect: boolean }]
// якщо тип boolean, то options: [{ title: "True", isCorrect: false }, { title: "False", isCorrect: true }]
