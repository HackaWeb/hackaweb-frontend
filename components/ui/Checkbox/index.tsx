"use client";

import { cn } from "@/helpers/cn";
import { useState } from "react";
import { MdCheck } from "react-icons/md";

export const Checkbox = ({
    checked = false,
    onChange,
    className,
}: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(checked);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
        if (onChange) {
            onChange(!isChecked);
        }
    };

    return (
        <div
            className={cn(
                "w-6 h-6 flex items-center justify-center border-2 rounded-md cursor-pointer transition-all border-purple",
                isChecked ? "bg-purple border-purple" : "",
                className,
            )}
            onClick={toggleCheckbox}
        >
            {isChecked && <MdCheck className="size-8" />}
        </div>
    );
};
