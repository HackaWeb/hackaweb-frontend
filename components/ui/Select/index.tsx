"use client";

import { useState } from "react";
import { SelectOption } from "@/types/selectOption.interface";
import { SelectProps } from "./Select.props";
import { AiOutlineDown } from "react-icons/ai";
import { cn } from "@/helpers/cn";

export const Select = ({
    options,
    activeOption,
    setActiveOption,
    id,
    className,
    placeholder,
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onSelectOptionClick = (option: SelectOption) => {
        setActiveOption(option);
        setIsOpen(false);
    };

    return (
        <div className={cn("relative w-full", className)} id={id}>
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                type="button"
                className="w-full flex justify-between items-center px-4 py-3 bg-blackOpacity text-white rounded-md focus:outline-none"
            >
                {activeOption ? (
                    activeOption.title
                ) : (
                    <span className="text-gray">{placeholder}</span>
                )}
                <AiOutlineDown
                    className="text-gray transition-transform"
                    style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                    }}
                />
            </button>
            {isOpen && (
                <ul className="absolute left-0 top-full mt-1 w-full bg-[#201f2d] text-gray rounded-md shadow-lg z-10 overflow-hidden">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            onClick={() => onSelectOptionClick(option)}
                            className="px-4 py-3 cursor-pointer hover:bg-blackOpacity-light transition-colors"
                        >
                            {option.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
