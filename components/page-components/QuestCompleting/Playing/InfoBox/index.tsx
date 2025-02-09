import { InfoBoxProps } from "./InfoBox.props";

export const InfoBox = ({
    currentQuestionIndex,
    questionsLength,
}: InfoBoxProps) => {
    return (
        <div className="absolute right-10 top-10 text-gray p-6 rounded-md bg-blackOpacity">
            <div>Часу залишилось: 59.59</div>
            <div>
                Питання №: {currentQuestionIndex + 1} з {questionsLength}
            </div>
        </div>
    );
};
