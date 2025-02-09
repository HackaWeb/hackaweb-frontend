import { CreateQuest } from "./CreateQuest";
import QuestEdit from "../modals/QuestEdit";
import { CreateQuestion } from "./CreateQuestion";
import QuestionEdit from "../modals/QuestionEdit";

export const Modals = () => {
    return (
        <>
            <CreateQuest />
            <QuestEdit />
            <CreateQuestion />
            <QuestionEdit />
        </>
    );
};
