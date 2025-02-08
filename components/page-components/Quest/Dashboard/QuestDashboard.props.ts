import { Attempt } from "@/types/attempt.interface";
import { Quest } from "@/types/quest.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface QuestDashboardProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    myQuests: Quest[];
    questAttempts: Attempt[];
    isActionable: boolean;
}
