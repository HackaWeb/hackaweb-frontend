export type ModalType =
    | "QuestCreation"
    | "QuestEdit"
    | "QuestionCreation"
    | "QuestionEdit"
    | "DeleteConfirmation";

export type ModalState = {
    active: ModalType[];
    deletingInfo?: {
        title: string;
        callback: () => void;
    };
    prev?: ModalType;
};
