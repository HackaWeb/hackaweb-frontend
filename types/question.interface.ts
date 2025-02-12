import { QuestionType } from "./question.type";

export interface ChoiceOption {
    index?: number;
    title: string;
    isCorrect: boolean;
}

export interface ChoiceOptionWhileTesting {
    title: string;
    id: string;
}

export interface Question {
    id: string;
    text: string;
    type: number;
    choiceOptions: ChoiceOption[];
    mediaUrl?: string;
    fileType?: "image" | "video";
}

export interface QuestionWhileTesting {
    id: string;
    title: string;
    type: number;
    options?: ChoiceOptionWhileTesting[];
    mediaUrl?: string;
}

// якщо тип інпут, options: [{ title: string, isCorrect: true }]
// якщо тип choice, то options:  [{ title: string, isCorrect: boolean }]
// якщо тип boolean, то options: [{ title: "True", isCorrect: false }, { title: "False", isCorrect: true }]
