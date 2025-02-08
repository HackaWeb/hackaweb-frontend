"use client";

import { InputQuestionProps } from "./InputQuestion.props";
import { Input } from "@/components/ui/Input";
import { useEffect, useState } from "react";

export const InputQuestion = ({
    onAnswerChange,
    initialAnswer = null,
}: InputQuestionProps) => {
    const [answer, setAnswer] = useState(initialAnswer);

    useEffect(() => {
        setAnswer(initialAnswer);
    }, [initialAnswer]);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
        onAnswerChange(event.target.value);
    };

    return (
        <div className="mt-10 max-w-[400px] mx-auto">
            <div className="text-2xl">Ваша відповідь</div>
            <Input
                placeholder="Впишіть відповідь..."
                className="mt-3 text-lg"
                value={answer || ""}
                onChange={onInputChange}
            />
        </div>
    );
};
