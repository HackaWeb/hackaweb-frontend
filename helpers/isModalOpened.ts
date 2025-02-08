import { ModalType } from "@/store/slices/modals/modals.types";

export const isModalOpened = (modal: ModalType, state: ModalType[]) => {
    return state.includes(modal);
};
