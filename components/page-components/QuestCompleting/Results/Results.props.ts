import { SubmitQuestResponseSuccess } from "@/api/responses/quest.type";
import { Quest } from "@/types/quest.interface";

export interface ResultsProps {
    quest: Quest;
    result: SubmitQuestResponseSuccess | null;
}
