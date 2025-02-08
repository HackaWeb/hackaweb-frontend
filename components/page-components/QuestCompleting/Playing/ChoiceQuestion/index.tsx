"use client";

import { Checkbox } from "@/components/ui/Checkbox";
import { ChoiceQuestionProps } from "./ChoiceQuestion.props";

export const ChoiceQuestion = ({
    question,
}: ChoiceQuestionProps) => {
    return (
        <div className={`grid grid-cols-4 mt-10`}>
            <div className="bg-[#452168] text-white text-xl font-semibold flex items-center justify-center aspect-square relative">
                Option 1
                <div className="absolute top-4 right-4">
                    <Checkbox
                        checked={true}
                        onChange={() => {}}
                        className="w-10 h-10"
                    />
                </div>
            </div>
            <div className="bg-[#8e612d] text-white text-xl font-semibold flex items-center justify-center aspect-square relative">
                Option 2
                <div className="absolute top-4 right-4">
                    <Checkbox
                        checked={true}
                        onChange={() => {}}
                        className="w-10 h-10"
                    />
                </div>
            </div>
            <div className="bg-[#7a3392] text-white text-xl font-semibold flex items-center justify-center aspect-square relative">
                Option 3
                <div className="absolute top-4 right-4">
                    <Checkbox
                        checked={true}
                        onChange={() => {}}
                        className="w-10 h-10"
                    />
                </div>
            </div>
            <div className="bg-[#215e3f] text-white text-xl font-semibold flex items-center justify-center aspect-square relative">
                Option 4
                <div className="absolute top-4 right-4">
                    <Checkbox
                        checked={true}
                        onChange={() => {}}
                        className="w-10 h-10"
                    />
                </div>
            </div>
        </div>
    );
};
