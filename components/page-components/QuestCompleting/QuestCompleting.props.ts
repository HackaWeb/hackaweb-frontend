import { CompletingType } from "@/types/completingType.type";
import { Question } from "@/types/question.interface";

export interface QuestCompletingProps {
    questions: Question[];
    completingType: CompletingType;
}
