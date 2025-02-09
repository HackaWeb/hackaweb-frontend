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

    const isChecked = (option: string) =>
        Boolean(options.find((o) => o.title === option));

    const checkHandler = (value: boolean, option: string) => {
        if (!option) return toast.error("Спочатку напишіть варіант відповіді!");

        if (!value) return dispatch(removeOption(option));

        dispatch(
            addOption({
                title: option,
                slug: option.toLowerCase().trim().replace(" ", "_"),
            }),
        );
    };

    const inputHandler = (
        e: ChangeEvent<HTMLInputElement>,
        setOption: (option: string) => void,
        value: string,
    ) => {
        const option = e.currentTarget.value;
        setOption(option);

        if (!option) return dispatch(removeOption(option));

        if (isChecked(value))
            dispatch(
                editOption({
                    title: option,
                    slug: option.toLowerCase().trim().replace(" ", "_"),
                }),
            );
        console.log(options);
    };

    return (
        <div className="mt-4">
            <label htmlFor="correctAnswer" className="text-gray">
                Оберіть правильну-(і) відповідь-(і)
            </label>
            <div>
                <div className="mt-2">
                    <div className="flex justify-between relative">
                        <Input
                            placeholder="Впишіть варіант 1.."
                            value={option1}
                            onChange={(e) =>
                                inputHandler(e, setOption1, option1)
                            }
                        />
                        <Checkbox
                            checked={isChecked(option1)}
                            onChange={(value) => {
                                checkHandler(value, option1);
                            }}
                            className="absolute right-4 top-3"
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="flex justify-between relative">
                        <Input
                            placeholder="Впишіть варіант 2..."
                            value={option2}
                            onChange={(e) =>
                                inputHandler(e, setOption2, option2)
                            }
                        />
                        <Checkbox
                            checked={isChecked(option2)}
                            onChange={(value) => {
                                checkHandler(value, option2);
                            }}
                            className="absolute right-4 top-3"
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="flex justify-between relative">
                        <Input
                            placeholder="Впишіть варіант 3..."
                            value={option3}
                            onChange={(e) =>
                                inputHandler(e, setOption3, option3)
                            }
                        />
                        <Checkbox
                            checked={isChecked(option3)}
                            onChange={(value) => {
                                checkHandler(value, option3);
                            }}
                            className="absolute right-4 top-3"
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="flex justify-between relative">
                        <Input
                            placeholder="Впишіть варіант 4..."
                            value={option4}
                            onChange={(e) =>
                                inputHandler(e, setOption4, option4)
                            }
                        />
                        <Checkbox
                            checked={isChecked(option4)}
                            onChange={(value) => {
                                checkHandler(value, option4);
                            }}
                            className="absolute right-4 top-3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
