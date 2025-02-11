import { QuestionType } from "./question.type";

export interface ChoiceOption {
    id: number;
    title: string;
    isCorrect: boolean;
}

export interface ChoiceOptionWhileTesting {
    title: string;
    id: string;
}

export interface Question {
    id: string;
    title: string;
    type: QuestionType;
    options: ChoiceOption[];
    file?: string;
    fileType?: "image" | "video";
}

export interface QuestionWhileTesting {
    id: string;
    title: string;
    type: number;
    options?: ChoiceOptionWhileTesting[];
    file?: string;
}

// якщо тип інпут, options: [{ title: string, isCorrect: true }]
// якщо тип choice, то options:  [{ title: string, isCorrect: boolean }]
// якщо тип boolean, то options: [{ title: "True", isCorrect: false }, { title: "False", isCorrect: true }]
