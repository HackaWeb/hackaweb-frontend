"use client";
import { Input } from "@/components/ui/Input";
import {
    addOption,
    editOption,
    removeOption,
} from "@/store/slices/options/options";
import { useAnswers } from "@/hooks/useAnswers";

export const InputAnswer = () => {
    const { dispatch, getOption } = useAnswers();

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;

        if (!title) return dispatch(removeOption(0));

        if (!getOption(0))
            return dispatch(addOption({ id: 0, title, isCorrect: true }));

        dispatch(
            editOption({
                title,
                id: 0,
                isCorrect: true,
            }),
        );
    };

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
