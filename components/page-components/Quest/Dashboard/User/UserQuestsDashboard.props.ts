import { Quest } from "@/types/quest.interface";
export interface MyQuestsDashboardProps {
    title: string;
    quests: Quest[];
    isActionable: boolean;
}
