"use client";
import { Checkbox } from "@/components/ui/Checkbox";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import {
    editOption,
    selectOptions,
    setOptions,
} from "@/store/slices/options/options";
import { ChoiceOption } from "@/types/question.interface";
import { use, useEffect } from "react";
import { toast } from "react-toastify";

export const TrueFalseAnswer = ({
    fetchedOptions,
}: {
    fetchedOptions?: ChoiceOption[];
}) => {
    const dispatch = useAppDispatch();
    const options = useAppSelector(selectOptions);

    const getOption = (index: number) =>
        options.find((option) => option.index === index);

    const checkHandler = (isCorrect: boolean, index: number) => {
        const title = getOption(index)?.title;
        if (!title) {
            return dispatch(
                setOptions([
                    {
                        index: 0,
                        title: "Хибність",
                        isCorrect: index === 0 && isCorrect,
                    },
                    {
                        index: 1,
                        title: "Істина",
                        isCorrect: index === 1 && isCorrect,
                    },
                ]),
            );
        }

        // If both options are correct/incorrect, remove them
        if (!getOption(index ? 0 : 1)?.isCorrect && !isCorrect) {
            return dispatch(setOptions([]));
        } else if (getOption(index ? 0 : 1)?.isCorrect && isCorrect) {
            return toast.error("Оберіть одну правильну відповідь!");
        }

        dispatch(
            editOption({
                title,
                isCorrect,
                index,
            }),
        );
    };

    useEffect(() => {
        if (fetchedOptions) dispatch(setOptions(fetchedOptions));
    }, [fetchedOptions]);

    return (
        <div className="mt-4">
            <label htmlFor="correctAnswer" className="text-gray">
                Оберіть правильну відповідь
            </label>
            <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="flex justify-between bg-blackOpacity p-4">
                    <span>Істина</span>
                    <Checkbox
                        checked={getOption(1)?.isCorrect}
                        onChange={(e) => {
                            checkHandler(e, 1);
                        }}
                    />
                </div>
                <div className="flex justify-between bg-blackOpacity p-4">
                    <span>Хибність</span>
                    <Checkbox
                        checked={getOption(0)?.isCorrect}
                        onChange={(e) => {
                            checkHandler(e, 0);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
