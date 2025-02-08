import React from "react";
import { AchievementGroupProps } from "./AchievementGroup.props";
import Achievement from "..";
import { cn } from "@/helpers/cn";

const AchievementGroup = ({
    className,
    children,
    ...rest
}: AchievementGroupProps) => {
    return (
        <div className={cn("flex flex-col gap-2", className)} {...rest}>
            {children}
        </div>
    );
};

export default AchievementGroup;
