import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { selectModals, toggleModal } from "@/store/slices/modals/modals";
import { ModalType } from "@/store/slices/modals/modals.types";
import {
    selectActiveQuestion,
    selectOptions,
    selectQuest,
    selectQuestions,
    setActiveId,
    setOptions,
} from "@/store/slices/quests/quests";
import { useState } from "react";

export const useQuestModals = () => {
    const dispatch = useAppDispatch();
    const quest = useAppSelector(selectQuest);
    const questions = useAppSelector(selectQuestions);
    const question = useAppSelector(selectActiveQuestion);
    const options = useAppSelector(selectOptions);
    const modals = useAppSelector(selectModals);
    const [media, setMedia] = useState<string | null>(null);

    const onQuestionAddClick = (current: ModalType) => {
        dispatch(toggleModal(current));
        dispatch(toggleModal("QuestionCreation"));
    };

    const onQuestionEditClick = (current: ModalType, id: string) => {
        dispatch(toggleModal(current));
        dispatch(toggleModal("QuestionEdit"));
        dispatch(setActiveId(id));
    };

    const onImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0];

        if (uploadedFile) {
            const fileURL = URL.createObjectURL(uploadedFile);
            setMedia(fileURL);
        }
    };

    return {
        dispatch,
        modals,
        quest,
        media,
        onQuestionAddClick,
        onQuestionEditClick,
        onImageUpload,
        questions,
        question,
        options,
    };
};
