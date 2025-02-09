"use client";
import { isModalOpened } from "@/helpers/isModalOpened";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { selectModals } from "@/store/slices/modals/modals";

function QuestionEdit() {
    const modals = useAppSelector(selectModals);
    return isModalOpened("QuestionEdit", modals) && <div>QuestionEdit</div>;
}

export default QuestionEdit;
