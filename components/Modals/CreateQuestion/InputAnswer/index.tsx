"use client";
import { Input } from "@/components/ui/Input";
import {
    addOption,
    editOption,
    removeOption,
    setOptions,
} from "@/store/slices/options/options";
import { AnswersProps } from "../Answers.props";
import { useAnswers } from "@/hooks/useAnswers";
import { useEffect } from "react";

export const InputAnswer = ({ fetchedOptions }: AnswersProps) => {
    const { dispatch, getOption } = useAnswers();

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;

        if (!title) return dispatch(removeOption(0));

        if (!getOption(0))
            return dispatch(addOption({ index: 0, title, isCorrect: true }));

        dispatch(
            editOption({
                title,
                index: 0,
                isCorrect: true,
            }),
        );
    };

    useEffect(() => {
        if (fetchedOptions) dispatch(setOptions(fetchedOptions));
    }, [fetchedOptions]);

    return (
        <div className="mt-4">
            <label htmlFor="correctAnswer" className="text-gray">
                Впишіть правильну відповідь
            </label>
            <Input
                id="correctAnswer"
                className="mt-2"
                placeholder="Правильна відповідь..."
                value={getOption(0)?.title || ""}
                onChange={inputHandler}
            />
        </div>
    );
};
