import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { selectOptions } from "@/store/slices/options/options";

export const useAnswers = () => {
    const dispatch = useAppDispatch();
    const options = useAppSelector(selectOptions);

    const getOption = (index: number) =>
        options.find((option) => option.index === index);

    const isChecked = (index: number) =>
        Boolean(getOption(index) && getOption(index)?.isCorrect);

    return { dispatch, getOption, options, isChecked };
};
