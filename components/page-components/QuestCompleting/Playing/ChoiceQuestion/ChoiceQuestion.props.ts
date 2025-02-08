import { ChoiceOption, Question } from "@/types/question.interface";

export interface ChoiceQuestionProps {
    question: Question;
    onAnswerChange: (answer: ChoiceOption[]) => void;
    initialAnswer: ChoiceOption[];
}
