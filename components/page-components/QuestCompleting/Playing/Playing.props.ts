import { QuestionWhileTesting } from "@/types/question.interface";

export interface PlayingProps {
    questions: QuestionWhileTesting[];
    onCompleteTest: () => void;
}
