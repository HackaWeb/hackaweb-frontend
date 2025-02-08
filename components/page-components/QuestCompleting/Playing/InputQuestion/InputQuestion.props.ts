import { Question } from "@/types/question.interface";

export interface InputQuestionProps {
    onAnswerChange: (answer: string) => void;
    initialAnswer: string | null;
}
