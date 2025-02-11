import { QuestionWhileTesting } from "@/types/question.interface";

export interface PlayingProps {
    questions: QuestionWhileTesting[];
    onCompleteTest: () => void;
    setUserAnswers: React.Dispatch<
        React.SetStateAction<Record<string, string>>
    >;
    timeLeft: number | null;
}
