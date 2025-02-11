import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { selectModals, toggleModal } from "@/store/slices/modals/modals";
import { ModalType } from "@/store/slices/modals/modals.types";
import {
    selectEditingQuest,
    setEditingQuestion,
} from "@/store/slices/quests/editQuests";
import { useState } from "react";

export const useQuestModals = () => {
    const dispatch = useAppDispatch();
    const quest = useAppSelector(selectEditingQuest);
    const modals = useAppSelector(selectModals);
    const [media, setMedia] = useState<string | null>(null);

    const onQuestionAddClick = (current: ModalType) => {
        dispatch(toggleModal(current));
        dispatch(toggleModal("QuestionCreation"));
    };

    const onQuestionEditClick = (current: ModalType, id: string) => {
        dispatch(toggleModal(current));
        dispatch(toggleModal("QuestionEdit"));
        dispatch(setEditingQuestion(id));
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
    };
};
