import React from "react";
import { AchievementProps } from "./Achievement.props";
import { cn } from "@/helpers/cn";

const Achievement = ({ achievement, className, ...rest }: AchievementProps) => {
    return (
        <div
            className={cn(
                "w-fit py-1 px-2 border-2 text-sm border-purple rounded-md",
                className,
            )}
            {...rest}
        >
            {achievement.name}
        </div>
    );
};

export default Achievement;
