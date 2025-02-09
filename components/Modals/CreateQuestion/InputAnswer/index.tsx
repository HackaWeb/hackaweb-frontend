"use client";
import { Input } from "@/components/ui/Input";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import {
    addOption,
    editOption,
    removeOption,
    selectOptions,
    setOptions,
} from "@/store/slices/options/options";
import { ChoiceOption } from "@/types/question.interface";
import { useEffect } from "react";

export const InputAnswer = ({
    fetchedOptions,
}: {
    fetchedOptions?: ChoiceOption[];
}) => {
    const dispatch = useAppDispatch();
    const options = useAppSelector(selectOptions);

    const isAvailable = () => options.find((option) => option.index === 0);

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;

        if (!title) return dispatch(removeOption(0));

        if (!isAvailable())
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
                value={isAvailable()?.title || ""}
                onChange={inputHandler}
            />
        </div>
    );
};
