"use client";

import { isModalOpened } from "@/helpers/isModalOpened";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import ModalBg from "../../modals/ModalBg";
import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { selectDeletingInfo, selectModals } from "@/store/slices/modals/modals";
import { RiDeleteBinLine } from "react-icons/ri";
import { Button } from "@/components/ui/Button";

export const DeleteConfirmation = () => {
    const modals = useAppSelector(selectModals);
    const deletingInfo = useAppSelector(selectDeletingInfo);

    return (
        isModalOpened("DeleteConfirmation", modals) && (
            <>
                <div className="absolute left-[50%] -translate-x-[50%] max-w-[700px] w-full top-10 z-10 flex flex-col place-content-center place-items-center bg-blue p-6">
                    <ReturnBtn
                        className="self-start"
                        modal="DeleteConfirmation"
                    />
                    <div className="text-3xl mt-10">Підтвердження</div>
                    <div className="mt-4 text-center text-lg">
                        {deletingInfo?.title}
                    </div>
                    <RiDeleteBinLine className="mx-auto mt-6 size-40" />
                    <Button color="redBorder" className="mt-6">
                        <span>Видалити</span>
                        <RiDeleteBinLine className="size-6" />
                    </Button>
                </div>
                <ModalBg modal="DeleteConfirmation" />
            </>
        )
    );
};
