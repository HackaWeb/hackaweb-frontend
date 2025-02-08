import { Achievement } from "@/types/achivement.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AchievementProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    achievement: Achievement;
}
