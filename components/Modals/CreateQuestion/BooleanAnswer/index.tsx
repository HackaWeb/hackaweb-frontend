"use client";
import { Checkbox } from "@/components/ui/Checkbox";
import { useAnswers } from "@/hooks/useAnswers";
import { editOption, setOptions } from "@/store/slices/options/options";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { AnswersProps } from "../Answers.props";

export const BooleanAnswer = ({ fetchedOptions }: AnswersProps) => {
    const { dispatch, getOption } = useAnswers();

    const checkHandler = (isCorrect: boolean, index: number) => {
        const title = getOption(index)?.title;

        const booleanOptions = [
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
        ];

        if (!title) return dispatch(setOptions(booleanOptions));

        if (getOption(index ? 0 : 1)!.isCorrect && isCorrect) {
            return toast.error("Оберіть одну правильну відповідь!");
        } else if (!getOption(index ? 0 : 1)!.isCorrect && !isCorrect) {
            return dispatch(setOptions([]));
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
