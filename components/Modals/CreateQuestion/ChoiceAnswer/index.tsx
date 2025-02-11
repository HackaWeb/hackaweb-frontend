"use client";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { ChangeEvent } from "react";
import { toast } from "react-toastify";
import { useAnswers } from "@/hooks/useAnswers";

export const Choice = () => {
    const { dispatch, getOption, isChecked } = useAnswers();

    const checkHandler = (isCorrect: boolean, id: string) => {
        const option = getOption(id);

        if (!option) return toast.error("Спочатку напишіть варіант відповіді!");

        dispatch(
            editOption({
                title: option.title,
                isCorrect,
                id,
            }),
        );
    };

    const inputHandler = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        const title = e.target.value;

        if (!title) return dispatch(removeOption(id));

        if (!getOption(id))
            return dispatch(addOption({ id, title, isCorrect: false }));

        dispatch(
            editOption({
                title,
                id,
                isCorrect: isChecked(id),
            }),
        );
    };

    return (
        <div className="mt-4">
            <label htmlFor="correctAnswer" className="text-gray">
                Оберіть правильну-(і) відповідь-(і)
            </label>
            <div>
                {[1, 2, 3, 4].map((_, id) => {
                    return (
                        <div className="mt-2" key={id}>
                            <div className="flex justify-between relative">
                                <Input
                                    placeholder={`Впишіть варіант ${id + 1}..`}
                                    value={getOption(id)?.title || ""}
                                    onChange={(e) => inputHandler(e, id)}
                                />
                                <Checkbox
                                    checked={isChecked(id)}
                                    onChange={(e) => {
                                        checkHandler(e, id);
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
