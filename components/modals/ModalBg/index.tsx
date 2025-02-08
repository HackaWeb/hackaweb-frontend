"use client";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { ModalBgProps } from "./ModalBg.props";
import { toggleModal } from "@/store/slices/modals";

function ModalBg({ modal }: ModalBgProps) {
    const dispatch = useAppDispatch();

    return (
        <div
            className="h-full w-full fixed bg-black bg-opacity-70"
            onClick={() => dispatch(toggleModal(modal))}
        />
    );
}

export default ModalBg;
