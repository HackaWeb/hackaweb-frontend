"use client";
import { TbArrowBackUp } from "react-icons/tb";
import { Button } from "../Button";
import { ReturnBtnProps } from "./ReturnBtn.props";
import { cn } from "@/helpers/cn";
import { useRouter } from "next/navigation";

export const ReturnBtn = ({ className }: ReturnBtnProps) => {
    const router = useRouter();
    return (
        <Button
            color="purpleBorder"
            className={cn("flex gap-2", className)}
            onClick={() => router.back()}
        >
            <TbArrowBackUp size={22} />
            <span>Повернутися назад</span>
        </Button>
    );
};
