"use client";

import { Button } from "@/components/ui/Button";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import {
    setDeletingConfirmationTitle,
    toggleModal,
} from "@/store/slices/modals/modals";

export const DeleteProfile = () => {
    const dispatch = useAppDispatch();

    const onDeleteButtonClick = () => {
        dispatch(
            setDeletingConfirmationTitle(
                "Ви впевнені, що хочете видалити акаунт?",
            ),
        );
        dispatch(toggleModal("DeleteConfirmationProfile"));
    };

    return (
        <Button
            className="mt-6 w-full"
            color="redBorder"
            onClick={onDeleteButtonClick}
        >
            Видалити акаунт
        </Button>
    );
};
