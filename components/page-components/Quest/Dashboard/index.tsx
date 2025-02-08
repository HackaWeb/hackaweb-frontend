import React from "react";
import UserQuestsDashboard from "./User";
import { QuestDashboardProps } from "./QuestDashboard.props";
import CompletedQuestsDashboard from "./Completed";
import { cn } from "@/helpers/cn";

const QuestDashboard = ({
    myQuests,
    questAttempts,
    className,
    isActionable,
    children,
    ...rest
}: QuestDashboardProps) => {
    return (
        <div
            className={cn("min-w-full flex flex-col gap-4", className)}
            {...rest}
        >
            {children}
        </div>
    );
};

export default QuestDashboard;
