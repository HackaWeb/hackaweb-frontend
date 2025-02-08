import React from "react";
import MyQuestsDashboard from "./My";
import { QuestDashboardProps } from "./QuestDashboard.props";
import CompletedQuestsDashboard from "./Completed";
import { cn } from "@/helpers/cn";

const QuestDashboard = ({
    myQuests,
    questAttempts,
    className,
    ...rest
}: QuestDashboardProps) => {
    return (
        <div
            className={cn("min-w-full flex flex-col gap-4", className)}
            {...rest}
        >
            <MyQuestsDashboard quests={myQuests} />
            <CompletedQuestsDashboard attempts={questAttempts} />
        </div>
    );
};

export default QuestDashboard;
