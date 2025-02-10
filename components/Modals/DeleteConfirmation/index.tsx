"use client";

import { isModalOpened } from "@/helpers/isModalOpened";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import ModalBg from "../../modals/ModalBg";
import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { selectModals } from "@/store/slices/modals/modals";
import { selectQuestions } from "@/store/slices/questions/questions";

export const DeleteConfirmation = () => {
    const dispatch = useAppDispatch();
    const questions = useAppSelector(selectQuestions);
    const modals = useAppSelector(selectModals);

    return (
        isModalOpened("DeleteConfirmation", modals) && (
            <>
                <div className="absolute left-[50%] -translate-x-[50%] max-w-[700px] w-full top-10 z-10 flex flex-col place-content-center place-items-center bg-blue p-6">
                    <ReturnBtn
                        className="self-start"
                        modal="DeleteConfirmation"
                    />
                    <div className="text-3xl mt-10">Створення Квесту</div>
                </div>
                <ModalBg modal="QuestCreation" />
            </>
        )
    );
};
