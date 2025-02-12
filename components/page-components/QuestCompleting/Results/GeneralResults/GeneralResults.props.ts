import { SubmitQuestResponseSuccess } from "@/api/responses/quest.type";
import { Quest } from "@/types/quest.interface";

export interface GeneralResultsProps {
    quest: Quest;
    result: SubmitQuestResponseSuccess | null;
}