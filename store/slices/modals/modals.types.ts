export type ModalType =
    | "QuestCreation"
    | "QuestEdit"
    | "QuestionCreation"
    | "QuestionEdit";

export type ModalState = {
    active: ModalType[];
    prev?: ModalType;
};
