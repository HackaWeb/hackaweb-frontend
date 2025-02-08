import { Button } from "@/components/ui/Button";
import { ChoiceQuestion } from "./ChoiceQuestion";
import { PlayingProps } from "./Playing.props";
import { useState } from "react";
import { InputQuestion } from "./InputQuestion";

export const PlayingGame = ({ questions }: PlayingProps) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    return (
        <div className="min-h-screen">
            <div
                className="absolute w-full top-0 left-0 right-0 grid z-10"
                style={{
                    gridTemplateColumns: `repeat(${questions.length}, 1fr)`,
                }}
            >
                {questions.map((_, index) => (
                    <button
                        key={index}
                        className={`h-6 flex items-center justify-center font-semibold transition-all ${
                            index <= currentQuestionIndex
                                ? "bg-purple text-white cursor-pointer"
                                : "text-gray-light text-opacity-30"
                        }`}
                        disabled={index > currentQuestionIndex}
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
                    Питання #{currentQuestionIndex + 1}
                </h1>
            </div>

            {/* <ChoiceQuestion question={questions[currentQuestionIndex]} /> */}
            {/* <InputQuestion question={questions[currentQuestionIndex]} /> */}

            <Button
                color="purpleBackground"
                className="mt-6 mx-auto max-w-[200px] w-full mb-10"
                onClick={() => {
                    if (currentQuestionIndex < questions.length - 1) {
                        setCurrentQuestionIndex((prev) => prev + 1);
                    }
                }}
            >
                Зберегти відповідь
            </Button>
        </div>
    );
};
