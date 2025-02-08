"use client";

import { InputQuestionProps } from "./InputQuestion.props";
import { Input } from "@/components/ui/Input";

export const InputQuestion = ({ question }: InputQuestionProps) => {
    return (
        <div className="mt-10 max-w-[400px] mx-auto">
            <div className="text-2xl">Ваша відповідь</div>
            <Input
                placeholder="Впишіть відповідь..."
                className="mt-3 text-lg"
            />
        </div>
    );
};
