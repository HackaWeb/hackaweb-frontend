import React from "react";
import { QuestDashboardProps } from "./QuestDashboard.props";
import { cn } from "@/helpers/cn";

const QuestDashboard = ({
    className,
    children,
}: QuestDashboardProps) => {
    return (
        <div
            className={cn("min-w-full flex flex-col gap-4", className)}
        >
            {children}
        </div>
    );
};

export default QuestDashboard;
