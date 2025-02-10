import { Button } from "@/components/ui/Button";
import { ChoiceQuestion } from "./ChoiceQuestion";
import { InputQuestion } from "./InputQuestion";
import { BooleanQuestion } from "./BooleanQuestion";
import { PlayingProps } from "./Playing.props";
import { useState } from "react";
import { toast } from "react-toastify";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { Chat } from "./Chat";
import { ProgressBar } from "./ProgressBar";
import { InfoBox } from "./InfoBox";

export const PlayingGame = ({ questions, onCompleteTest }: PlayingProps) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<{ [key: number]: any }>({});
    const [questionsCompleted, setQuestionsCompleted] = useState<number[]>([]);
    const [isChatOpened, setIsChatOpened] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    const onAnswerChange = (answer: any) => {
        setAnswers((prev) => {
            const newAnswers = { ...prev, [currentQuestionIndex]: answer };

            setQuestionsCompleted((prevCompleted) => {
                return prevCompleted.includes(currentQuestionIndex)
                    ? prevCompleted
                    : [...prevCompleted, currentQuestionIndex];
            });

            return newAnswers;
        });
    };

    const onNextQuestionClick = () => {
        if (
            answers[currentQuestionIndex] == null ||
            answers[currentQuestionIndex].length === 0
        ) {
            toast.error("Ви не обрали відповідь!");
            return;
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        }

        if (currentQuestionIndex === questions.length - 1) {
            onCompleteTest();
            toast.success("Тест успішно завершено!");

            console.log(answers);
        }
    };

    const renderQuestion = () => {
        switch (currentQuestion.type) {
            case "choice":
                return (
                    <ChoiceQuestion
                        question={currentQuestion}
                        onAnswerChange={onAnswerChange}
                        initialAnswer={answers[currentQuestionIndex] || []}
                    />
                );
            case "input":
                return (
                    <InputQuestion
                        onAnswerChange={onAnswerChange}
                        initialAnswer={
                            (answers[currentQuestionIndex] as string) || ""
                        }
                    />
                );
            case "boolean":
                return (
                    <BooleanQuestion
                        onAnswerChange={onAnswerChange}
                        initialAnswer={answers[currentQuestionIndex]}
                    />
                );
            default:
                return <></>;
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
