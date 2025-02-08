import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AchievementProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
}
