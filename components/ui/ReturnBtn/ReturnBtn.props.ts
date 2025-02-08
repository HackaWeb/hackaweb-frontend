import { ModalType } from "@/store/slices/modals.types";

export interface ReturnBtnProps extends React.ComponentProps<"button"> {
    modal?: ModalType;
}
