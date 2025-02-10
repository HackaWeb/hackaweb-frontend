export type ModalType =
    | "QuestCreation"
    | "QuestEdit"
    | "QuestionCreation"
    | "QuestionEdit"
    | "DeleteConfirmationProfile";

export type ModalState = {
    active: ModalType[];
    deleteCofirmationTitle?: string;
    prev?: ModalType;
};
