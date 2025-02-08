import { cn } from "@/helpers/cn";
import React from "react";
import { DashboardHeaderProps } from "./Header.props";

const DashboardHeader = ({
    items,
    className,
    ...rest
}: DashboardHeaderProps) => {
    return (
        <tr className={cn(className)} {...rest}>
            {items.map((item) => (
                <th className="bg-blackOpacity py-2" key={item}>
                    {item}
                </th>
            ))}
        </tr>
    );
};

export default DashboardHeader;
