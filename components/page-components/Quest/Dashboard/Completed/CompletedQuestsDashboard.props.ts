import { CompletedQuest } from "@/types/quest.interface";

export interface CompletedQuestsDashboardProps {
    attempts: CompletedQuest[];
    title: string;
}
