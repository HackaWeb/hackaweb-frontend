"use client";
import { Input } from "@/components/ui/Input";
import { useAnswers } from "@/hooks/useAnswers";

export const InputAnswer = () => {
    const { dispatch, getOption } = useAnswers();

    const inputHandler = (
        e: React.ChangeEvent<HTMLInputElement>,
        id: string,
    ) => {
        const title = e.target.value;

        if (!title) return dispatch(removeOption(id));

        if (!getOption(id))
            return dispatch(
                addOption({ id: crypto.randomUUID(), title, isCorrect: true }),
            );

        dispatch(
            editOption({
                title,
                id,
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
                value={getOption()?.title || ""}
                onChange={inputHandler}
            />
        </div>
    );
};
