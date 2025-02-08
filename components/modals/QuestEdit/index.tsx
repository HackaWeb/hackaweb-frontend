"use client";
import { isModalOpened } from "@/helpers/isModalOpened";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { selectModals } from "@/store/slices/modals";

function QuestEdit() {
    const modals = useAppSelector(selectModals);
    return isModalOpened("QuestEdit", modals) && <div>QuestEdit</div>;
}

export default QuestEdit;
