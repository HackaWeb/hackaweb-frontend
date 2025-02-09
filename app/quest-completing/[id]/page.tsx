import { QuestCompletingPageComponent } from "@/components/page-components/QuestCompleting";
import { getPathname } from "@/helpers/getPathname";
import { CompletingType } from "@/types/completingType.type";
import { Question } from "@/types/question.interface";

const questions: Question[] = [
    {
        id: 1,
        title: "What is the capital of France?",
        type: "choice",
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
    },
    {
        id: 3,
        title: "Is 2 + 2 = 4?",
        type: "trueFalse",
    },
];

const QuestCompleting = async () => {
    const pathname = await getPathname();

    let completingType: CompletingType | null = null;
    console.log(pathname);
    if (pathname.includes("multi")) {
        completingType = "multi";
    } else {
        completingType = "single";
    }

    return (
        <QuestCompletingPageComponent
            questions={questions}
            completingType={completingType}
        />
    );
};

export default QuestCompleting;
