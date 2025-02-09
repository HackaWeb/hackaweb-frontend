import React from "react";
import { AchievementProps } from "./Achievement.props";
import { cn } from "@/helpers/cn";

export const Achievement = ({ title, className }: AchievementProps) => {
    return (
        <div
            className={cn(
                "w-fit py-1 px-2 text-sm border-2 text-yellow border-purple rounded-md bg-blackOpacity-dark",
                className,
            )}
        >
            {title}
        </div>
    );
};
