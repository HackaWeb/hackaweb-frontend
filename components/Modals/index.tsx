import { CreateQuest } from "./CreateQuest";
import { CreateQuestion } from "./CreateQuestion";
import { DeleteConfirmation } from "./DeleteConfirmation";
import QuestEdit from "./Modals/QuestEdit";
import QuestionEdit from "./Modals/QuestionEdit";

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
