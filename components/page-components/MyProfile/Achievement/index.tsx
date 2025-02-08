import React from "react";
import { AchievementProps } from "./Achievement.props";
import { cn } from "@/helpers/cn";

export const Achievement = ({
    title,
    className,
    ...rest
}: AchievementProps) => {
    return (
        <div
            className={cn(
                "w-fit py-1 px-2 border text-sm border-purple rounded-md",
                className,
            )}
            {...rest}
        >
            {title}
        </div>
    );
};
