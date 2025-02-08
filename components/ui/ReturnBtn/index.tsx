"use client";
import { TbArrowBackUp } from "react-icons/tb";
import { Button } from "../Button";
import { ReturnBtnProps } from "./ReturnBtn.props";
import { cn } from "@/helpers/cn";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { toggleModal } from "@/store/slices/modals";

export const ReturnBtn = ({ className, modal }: ReturnBtnProps) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const goBack = () => {
        router.back();
    };
    return (
        <Button
            color="purpleBorder"
            className={cn("flex gap-2", className)}
            onClick={() => (modal ? dispatch(toggleModal(modal)) : goBack())}
        >
            <TbArrowBackUp size={22} />
            <span>Повернутися назад</span>
        </Button>
    );
};
