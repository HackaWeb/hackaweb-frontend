import QuestCreation from "../QuestCreation";
import QuestEdit from "../QuestEdit";
import QuestionCreation from "../QuestionCreation";
import QuestionEdit from "../QuestionEdit";

function ModalWrapper() {
    return (
        <>
            <QuestCreation />
            <QuestEdit />
            <QuestionCreation />
            <QuestionEdit />
        </>
    );
}

export default ModalWrapper;
