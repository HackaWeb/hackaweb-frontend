import { Input } from "@/components/ui/Input";

export const InputAnswer = () => {
    return (
        <div className="mt-4">
            <label htmlFor="correctAnswer" className="text-gray">
                Впишіть правильну відповідь
            </label>
            <Input
                id="correctAnswer"
                className="mt-2"
                placeholder="Правильна відповідь..."
            />
        </div>
    );
};
