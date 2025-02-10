"use client";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import {
    addOption,
    editOption,
    removeOption,
} from "@/store/slices/options/options";
import { ChangeEvent } from "react";
import { toast } from "react-toastify";
import { useAnswers } from "@/hooks/useAnswers";

export const Choice = () => {
    const { dispatch, getOption, isChecked } = useAnswers();

    const checkHandler = (isCorrect: boolean, index: number) => {
        const option = getOption(index);

        if (!option) return toast.error("Спочатку напишіть варіант відповіді!");

        dispatch(
            editOption({
                title: option.title,
                isCorrect,
                index,
            }),
        );
    };

    const inputHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const title = e.target.value;

        if (!title) return dispatch(removeOption(index));

        if (!getOption(index))
            return dispatch(addOption({ index, title, isCorrect: false }));

        dispatch(
            editOption({
                title,
                index,
                isCorrect: isChecked(index),
            }),
        );
    };

    return (
        <div className="mt-4">
            <label htmlFor="correctAnswer" className="text-gray">
                Оберіть правильну-(і) відповідь-(і)
            </label>
            <div>
                {[1, 2, 3, 4].map((_, i) => {
                    return (
                        <div className="mt-2" key={i}>
                            <div className="flex justify-between relative">
                                <Input
                                    placeholder={`Впишіть варіант ${i + 1}..`}
                                    value={getOption(i)?.title || ""}
                                    onChange={(e) => inputHandler(e, i)}
                                />
                                <Checkbox
                                    checked={isChecked(i)}
                                    onChange={(e) => {
                                        checkHandler(e, i);
                                    }}
                                    className="absolute right-4 top-3"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
