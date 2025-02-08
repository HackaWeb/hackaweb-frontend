import { QuestCompletingPageComponent } from "@/components/page-components/QuestCompleting";
import { Question } from "@/types/question.interface";

const questions: Question[] = [
    {
        id: 1,
        title: "What is the capital of France?",
        type: "choice",
        points: 10,
        options: [
            { title: "Paris", slug: "paris" },
            { title: "Berlin", slug: "berlin" },
            { title: "London", slug: "london" },
            { title: "Madrid", slug: "madrid" },
        ],
    },
    {
        id: 2,
        title: "What is the capital of Germany?",
        type: "input",
        points: 10,
    },
    {
        id: 3,
        title: "Is 2 + 2 = 4?",
        type: "trueFalse",
        points: 10,
    },
];

const QuestCompleting = () => {
    return <QuestCompletingPageComponent questions={questions} />;
};

export default QuestCompleting;
