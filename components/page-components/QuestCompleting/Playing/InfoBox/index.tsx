import { InfoBoxProps } from "./InfoBox.props";

export const InfoBox = ({
    currentQuestionIndex,
    questionsLength,
    timeLeft,
}: InfoBoxProps) => {
    return (
        <div className="absolute right-5 top-5 md:right-10 md:top-10 text-gray p-3 md:p-6 rounded-md bg-[#261035] text-sm md:text-base">
            <div>Часу залишилось: {timeLeft} хв.</div>
            <div>
                Питання №: {currentQuestionIndex + 1} з {questionsLength}
            </div>
        </div>
    );
};
