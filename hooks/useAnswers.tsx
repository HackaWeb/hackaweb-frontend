import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import {
    selectEditingOptions,
    selectEditingQuestion,
} from "@/store/slices/quests/editQuests";

export const useAnswers = () => {
    const dispatch = useAppDispatch();
    const question = useAppSelector(selectEditingQuestion);
    const options = useAppSelector(selectEditingOptions);

    const getOption = (optionId: string) =>
        options?.find((option) => option.id === optionId);

    const isChecked = (optionId: string) =>
        Boolean(getOption(optionId) && getOption(optionId)?.isCorrect);

    return { dispatch, getOption, options, isChecked, question };
};
