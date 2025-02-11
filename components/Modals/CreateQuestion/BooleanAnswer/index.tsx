"use client";
import { Checkbox } from "@/components/ui/Checkbox";
import { useAnswers } from "@/hooks/useAnswers";
import { toast } from "react-toastify";

export const BooleanAnswer = () => {
    const { dispatch, getOption } = useAnswers();

    const checkHandler = (isCorrect: boolean, id: string) => {
        const title = getOption(id)?.title;

        const booleanOptions = [
            {
                id: "0",
                title: "Хибність",
                isCorrect: id === "0" && isCorrect,
            },
            {
                id: "1",
                title: "Істина",
                isCorrect: id === "1" && isCorrect,
            },
        ];

        if (!title) return dispatch(setOptions(booleanOptions));

        if (getOption(id ? "0" : "1")!.isCorrect && isCorrect) {
            return toast.error("Оберіть одну правильну відповідь!");
        } else if (!getOption(id ? "0" : "1")!.isCorrect && !isCorrect) {
            return dispatch(setOptions([]));
        }

        dispatch(
            editOption({
                title,
                isCorrect,
                id,
            }),
        );
    };

    return (
        <div className="mt-4">
            <label htmlFor="correctAnswer" className="text-gray">
                Оберіть правильну відповідь
            </label>
            <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="flex justify-between bg-blackOpacity p-4">
                    <span>Істина</span>
                    <Checkbox
                        checked={getOption("1")?.isCorrect}
                        onChange={(e) => {
                            checkHandler(e, "1");
                        }}
                    />
                </div>
                <div className="flex justify-between bg-blackOpacity p-4">
                    <span>Хибність</span>
                    <Checkbox
                        checked={getOption("0")?.isCorrect}
                        onChange={(e) => {
                            checkHandler(e, "0");
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
