"use client";

import { isModalOpened } from "@/helpers/isModalOpened";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { ModalBg } from "../../modals/ModalBg";
import { ReturnBtn } from "@/components/ui/ReturnBtn";
import {
    selectDeleteConfirmationTitle,
    selectModals,
    toggleModal,
} from "@/store/slices/modals/modals";
import { RiDeleteBinLine } from "react-icons/ri";
import { Button } from "@/components/ui/Button";
import { deleteUserProfile } from "@/api/user";
import { DEFAULT_FIELD_ERROR } from "@/api/responses/common/failure.interface";
import { toast } from "react-toastify";
import { setCookie } from "@/helpers/setCookie";
import { useRouter } from "next/navigation";
import { printToastErrorMessages } from "@/helpers/displayToasts";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";

export const DeleteConfirmation = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const modals = useAppSelector(selectModals);
    const deleteConfirmationTitle = useAppSelector(
        selectDeleteConfirmationTitle,
    );

    const deleteProfileFetchHandler = async () => {
        try {
            const data = await deleteUserProfile();

            if ("statusCode" in data && data.statusCode !== 200) {
                return data.errors;
            }
            return [];
        } catch (error) {
            return [DEFAULT_FIELD_ERROR];
        }
    };

    const deleteProfileHandler = async () => {
        try {
            const result = await deleteProfileFetchHandler();

            if (result.length === 0) {
                toast.success("Ваш профіль успішно видалено!");
                setCookie("token", "");
                router.push("/");

                const timeout = setTimeout(() => {
                    router.refresh();
                    clearTimeout(timeout);
                });
            } else {
                printToastErrorMessages(result.map((res) => res.message));
            }
        } catch (error) {
            toast.error(DEFAULT_FIELD_ERROR.message);
        }
    };

    const onDeleteSubmit = async () => {
        await deleteProfileHandler();
        dispatch(toggleModal("DeleteConfirmationProfile"));
    };

    return (
        isModalOpened("DeleteConfirmationProfile", modals) && (
            <>
                <div className="absolute left-[50%] -translate-x-[50%] max-w-[700px] w-full top-10 z-10 flex flex-col place-content-center place-items-center bg-blue p-6">
                    <ReturnBtn
                        className="self-start"
                        modal="DeleteConfirmationProfile"
                    />
                    <div className="text-3xl mt-10">Підтвердження</div>
                    <div className="mt-4 text-center text-lg">
                        {deleteConfirmationTitle}
                    </div>
                    <RiDeleteBinLine className="mx-auto mt-6 size-40" />
                    <Button
                        color="redBorder"
                        className="mt-6"
                        onClick={onDeleteSubmit}
                    >
                        <span>Видалити</span>
                        <RiDeleteBinLine className="size-6" />
                    </Button>
                </div>
                <ModalBg modal="DeleteConfirmationProfile" />
            </>
        )
    );
};
