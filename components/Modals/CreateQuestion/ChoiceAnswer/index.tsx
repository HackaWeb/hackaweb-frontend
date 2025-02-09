"use client";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import {
    addOption,
    editOption,
    removeOption,
    selectOptions,
} from "@/store/slices/options/options";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

export const Choice = () => {
    const dispatch = useAppDispatch();
    const options = useAppSelector(selectOptions);
    const [option1, setOption1] = useState<string>("");
    const [option2, setOption2] = useState<string>("");
    const [option3, setOption3] = useState<string>("");
    const [option4, setOption4] = useState<string>("");

    const questionOptions = [
        {
            value: option1,
            setValue: setOption1,
        },
        {
            value: option2,
            setValue: setOption2,
        },
        {
            value: option3,
            setValue: setOption3,
        },
        {
            value: option4,
            setValue: setOption4,
        },
    ];

    const isAvailable = (index: number) =>
        options.find((option) => option.index === index);

    const isChecked = (index: number) =>
        Boolean(isAvailable(index) && isAvailable(index)?.isCorrect);

    const checkHandler = (isCorrect: boolean, index: number) => {
        const option = isAvailable(index);

        if (!option) return toast.error("Спочатку напишіть варіант відповіді!");

        dispatch(
            editOption({
                title: option.title,
                isCorrect,
                index,
            }),
        );
    };

    const inputHandler = (
        e: ChangeEvent<HTMLInputElement>,
        setOption: (value: string) => void,
        index: number,
    ) => {
        const title = e.target.value;

        setOption(title);

        if (!title) return dispatch(removeOption(index));

        if (!isAvailable(index))
            return dispatch(addOption({ index, title, isCorrect: false }));

        dispatch(
            editOption({
                title,
                index,
                isCorrect: isChecked(index),
            }),
        );
    };

    console.log(options);

    return (
        <div className="mt-4">
            <label htmlFor="correctAnswer" className="text-gray">
                Оберіть правильну-(і) відповідь-(і)
            </label>
            <div>
                {questionOptions.map((option, i) => {
                    return (
                        <div className="mt-2" key={i}>
                            <div className="flex justify-between relative">
                                <Input
                                    placeholder={`Впишіть варіант ${i + 1}..`}
                                    value={option.value}
                                    onChange={(e) =>
                                        inputHandler(e, option.setValue, i)
                                    }
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
