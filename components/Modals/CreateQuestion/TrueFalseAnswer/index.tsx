import { Checkbox } from "@/components/ui/Checkbox";

export const TrueFalseAnswer = () => {
    return (
        <div className="mt-4">
            <label htmlFor="correctAnswer" className="text-gray">
                Оберіть правильну відповідь
            </label>
            <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="flex justify-between bg-blackOpacity p-4">
                    <span>Істина</span>
                    <Checkbox checked={true} onChange={() => {}} id="true" />
                </div>
                <div className="flex justify-between bg-blackOpacity p-4">
                    <span>Хибність</span>
                    <Checkbox checked={false} onChange={() => {}} id="true" />
                </div>
            </div>
        </div>
    );
};
