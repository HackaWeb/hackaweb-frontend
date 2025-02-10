import { CreateQuest } from "./CreateQuest";
import { CreateQuestion } from "./CreateQuestion";
import { DeleteConfirmation } from "./DeleteConfirmation";
import QuestEdit from "./QuestEdit";
import QuestionEdit from "./QuestionEdit";

export const Modals = () => {
    return (
        <>
            <CreateQuest />
            <QuestEdit />
            <CreateQuestion />
            <QuestionEdit />
            <DeleteConfirmation />
        </>
    );
};
