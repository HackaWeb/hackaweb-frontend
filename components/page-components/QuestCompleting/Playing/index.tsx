import { Button } from "@/components/ui/Button";
import { ChoiceQuestion } from "./ChoiceQuestion";
import { InputQuestion } from "./InputQuestion";
import { BooleanQuestion } from "./BooleanQuestion";
import { PlayingProps } from "./Playing.props";
import { useState } from "react";
import { toast } from "react-toastify";

export const PlayingGame = ({ questions, onCompleteTest }: PlayingProps) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<{ [key: number]: any }>({});
    const [questionsCompleted, setQuestionsCompleted] = useState<number[]>([]);

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

    return (
        <div className="relative">
            <div
                className="absolute w-full top-0 left-0 right-0 grid z-10"
                style={{
                    gridTemplateColumns: `repeat(${questions.length}, 1fr)`,
                }}
            >
                {questions.map((_, index) => (
                    <button
                        key={index}
                        className={`h-10 flex items-center justify-center font-semibold transition-all ${
                            questionsCompleted.includes(index) ||
                            index === currentQuestionIndex
                                ? "bg-purple text-white cursor-pointer"
                                : "text-gray-700 cursor-not-allowed"
                        }`}
                        disabled={
                            !questionsCompleted.includes(index) &&
                            index !== currentQuestionIndex
                        }
                        onClick={() => setCurrentQuestionIndex(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <div className="bg-blackOpacity pt-16 relative">
                <div className="absolute right-10 top-10 text-gray p-6 rounded-md bg-blackOpacity">
                    <div>Часу залишилось: 59.59</div>
                    <div>
                        Питання №: {currentQuestionIndex + 1} з{" "}
                        {questions.length}
                    </div>
                </div>
                <img
                    src="/question.png"
                    alt="Питання"
                    className="mx-auto mt-3 rounded-lg w-auto max-w-[400px]"
                />
                <h1 className="pt-10 pb-5 text-center">
                    {currentQuestion.title}
                </h1>
            </div>
            {currentQuestion.type === "choice" && (
                <ChoiceQuestion
                    question={currentQuestion}
                    onAnswerChange={onAnswerChange}
                    initialAnswer={answers[currentQuestionIndex] || []}
                />
            )}
            {currentQuestion.type === "input" && (
                <InputQuestion
                    onAnswerChange={onAnswerChange}
                    initialAnswer={
                        (answers[currentQuestionIndex] as string) || ""
                    }
                />
            )}
            {currentQuestion.type === "boolean" && (
                <BooleanQuestion
                    onAnswerChange={onAnswerChange}
                    initialAnswer={answers[currentQuestionIndex]}
                />
            )}
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
