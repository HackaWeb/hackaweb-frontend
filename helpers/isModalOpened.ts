import { ModalState, ModalType } from "@/store/slices/modals.types";

export const isModalOpened = (modal: ModalType, state: ModalState) => {
    return state.includes(modal);
};
