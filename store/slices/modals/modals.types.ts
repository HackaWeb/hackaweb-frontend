export type ModalType =
    | "QuestCreation"
    | "QuestEdit"
    | "QuestionCreation"
    | "QuestionEdit"
    | "DeleteConfirmation";

export type ModalState = {
    active: ModalType[];
    prev?: ModalType;
};
