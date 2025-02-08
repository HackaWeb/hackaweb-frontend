import { cn } from "@/helpers/cn";
import React from "react";
import { BlockProps } from "./Block.props";

const Block = ({ children, className, ...rest }: BlockProps) => {
    return (
        <div
            className={cn(
                "bg-blackOpacity p-4 flex flex-col gap-4 w-fit h-fit items-center rounded-md",
                className,
            )}
            {...rest}
        >
            {children}
        </div>
    );
};

export default Block;
