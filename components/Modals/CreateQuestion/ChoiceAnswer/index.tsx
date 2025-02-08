import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";

export const Choice = () => {
    return (
        <div className="mt-4">
            <label htmlFor="correctAnswer" className="text-gray">
                Оберіть правильну-(і) відповідь-(і)
            </label>
            <div>
                <div className="mt-2">
                    <div className="flex justify-between relative">
                        <Input placeholder="Впишіть варіант 1" />
                        <Checkbox
                            id="true"
                            className="absolute right-4 top-3"
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="flex justify-between relative">
                        <Input placeholder="Впишіть варіант 2..." />
                        <Checkbox
                            id="true"
                            className="absolute right-4 top-3"
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="flex justify-between relative">
                        <Input placeholder="Впишіть варіант 3..." />
                        <Checkbox
                            id="true"
                            className="absolute right-4 top-3"
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="flex justify-between relative">
                        <Input placeholder="Впишіть варіант 4..." />
                        <Checkbox
                            id="true"
                            className="absolute right-4 top-3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
