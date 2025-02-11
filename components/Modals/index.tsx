import { CreateQuest } from "./CreateQuest";
import { CreateQuestion } from "./CreateQuestion";
import { DeleteConfirmation } from "./DeleteConfirmation";
import QuestEdit from "../modals/QuestEdit";
import QuestionEdit from "../modals/QuestionEdit";

export const Modals = () => {
    return (
        <>
            <CreateQuest />
            <CreateQuestion />
            <QuestEdit />
            <QuestionEdit />
            <DeleteConfirmation />
        </>
    );
};
