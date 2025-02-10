import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { selectOptions } from "@/store/slices/options/options";

export const useAnswers = () => {
    const dispatch = useAppDispatch();
    const options = useAppSelector(selectOptions);

    const getOption = (id: number) =>
        options.find((option) => option.id === id);

    const isChecked = (id: number) =>
        Boolean(getOption(id) && getOption(id)?.isCorrect);

    return { dispatch, getOption, options, isChecked };
};
