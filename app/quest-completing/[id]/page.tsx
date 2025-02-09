import { QuestCompletingPageComponent } from "@/components/page-components/QuestCompleting";
import { QuestionWhileTesting } from "@/types/question.interface";

const questions: QuestionWhileTesting[] = [
    {
        id: 1,
        title: "What is the capital of France?",
        type: "choice",
        options: [
            { title: "Paris" },
            { title: "Berlin" },
            { title: "London" },
            { title: "Madrid" },
        ],
    },
    {
        id: 2,
        title: "What is the capital of Germany?",
        type: "input",
    },
    {
        id: 3,
        title: "Is 2 + 2 = 4?",
        type: "boolean",
    },
];

const QuestCompleting = async () => {
    return <QuestCompletingPageComponent questions={questions} />;
};

export default QuestCompleting;
