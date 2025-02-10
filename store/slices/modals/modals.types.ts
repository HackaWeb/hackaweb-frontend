export type ModalType =
    | "QuestCreation"
    | "QuestEdit"
    | "QuestionCreation"
    | "QuestionEdit"
    | "DeleteConfirmation";

export type ModalState = {
    active: ModalType[];
    deleteCofirmationTitle?: string;
    prev?: ModalType;
};
