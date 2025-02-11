import { useState } from "react";
import { QuestionWhileTesting } from "@/types/question.interface";
import { Button } from "@/components/ui/Button";
import { ChoiceQuestion } from "./ChoiceQuestion";
import { InputQuestion } from "./InputQuestion";
import { BooleanQuestion } from "./BooleanQuestion";
import { ProgressBar } from "./ProgressBar";
import { InfoBox } from "./InfoBox";
import { Chat } from "./Chat";
import { toast } from "react-toastify";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

interface PlayingGameProps {
    questions: QuestionWhileTesting[];
    onCompleteTest: () => void;
    setUserAnswers: React.Dispatch<
        React.SetStateAction<Record<string, string>>
    >;
    timeLeft: number | null;
}

export const PlayingGame = ({
    questions,
    onCompleteTest,
    setUserAnswers,
    timeLeft,
}: PlayingGameProps) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, any>>({});
    const [questionsCompleted, setQuestionsCompleted] = useState<number[]>([]);
    const [isChatOpened, setIsChatOpened] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    const onAnswerChange = (answer: any) => {
        setAnswers((prev) => {
            const newAnswers = { ...prev, [currentQuestionIndex]: answer };
            setUserAnswers(newAnswers);

            setQuestionsCompleted((prevCompleted) => {
                return prevCompleted.includes(currentQuestionIndex)
                    ? prevCompleted
                    : [...prevCompleted, currentQuestionIndex];
            });

            return newAnswers;
        });
    };

    const onNextQuestionClick = () => {
        if (!answers[currentQuestionIndex]) {
            toast.error("Ви не обрали відповідь!");
            return;
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            onCompleteTest();
            toast.success("Тест успішно завершено!");
        }
    };

    const renderQuestion = () => {
        switch (currentQuestion.type) {
            case 0:
                return (
                    <BooleanQuestion
                        onAnswerChange={onAnswerChange}
                        initialAnswer={answers[currentQuestionIndex]}
                    />
                );
            case 1:
                return (
                    <ChoiceQuestion
                        question={currentQuestion}
                        onAnswerChange={onAnswerChange}
                        initialAnswer={answers[currentQuestionIndex] || []}
                    />
                );
            case 2:
                return (
                    <InputQuestion
                        onAnswerChange={onAnswerChange}
                        initialAnswer={
                            (answers[currentQuestionIndex] as string) || ""
                        }
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="relative">
            <button
                className="absolute left-4 top-4 md:left-8 md:top-8 bg-[#261035] p-3 rounded-md cursor-pointer z-20"
                onClick={() => setIsChatOpened(true)}
            >
                <IoChatbubbleEllipsesSharp className="text-purple size-5 md:size-8" />
            </button>
            <Chat isOpened={isChatOpened} setIsOpened={setIsChatOpened} />
            <ProgressBar
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                questionsCompleted={questionsCompleted}
                questions={questions}
            />

            <div className="bg-blackOpacity pt-16 px-4 relative">
                <InfoBox
                    questionsLength={questions.length}
                    currentQuestionIndex={currentQuestionIndex}
                />
                <img
                    src="/question.png"
                    alt="Питання"
                    className="mx-auto mt-3 rounded-lg w-full max-w-[400px]"
                />
                <h1 className="pt-10 pb-5 text-center text-xl xsm:text-3xl">
                    {currentQuestion.title}
                </h1>
                <p className="text-center text-red-500">
                    Час:{" "}
                    {timeLeft !== null ? `${timeLeft} сек.` : "Загрузка..."}
                </p>
            </div>

            {renderQuestion()}

            <Button
                color="purpleBackground"
                className="mt-6 mx-auto max-w-[200px] w-full mb-10"
                onClick={onNextQuestionClick}
            >
                {currentQuestionIndex === questions.length - 1
                    ? "Завершити тест"
                    : "Наступне питання"}
            </Button>
        </div>
    );
};
