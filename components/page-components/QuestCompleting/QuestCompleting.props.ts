import { CompletingType } from "@/types/completingType.type";
import { QuestionWhileTesting } from "@/types/question.interface";

export interface QuestCompletingProps {
    questions: QuestionWhileTesting[];
    completingType: CompletingType;
}
