import { QuestCompletingPageComponent } from "@/components/page-components/QuestCompleting";
import { QuestionWhileTesting } from "@/types/question.interface";

const questions: QuestionWhileTesting[] = [
    {
        id: "12345",
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
        id: "123456",
        title: "What is the capital of Germany?",
        type: "input",
    },
    {
        id: "1234567",
        title: "Is 2 + 2 = 4?",
        type: "boolean",
    },
];

const QuestCompleting = async ({ params }: { params: { id: string } }) => {
    const questId = params.id;

    return <QuestCompletingPageComponent questions={questions} />;
};

export default QuestCompleting;
