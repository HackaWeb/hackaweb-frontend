import { MiddleColumnProps } from "./MiddleColumn.props";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export const MiddleColumn = ({ profile }: MiddleColumnProps) => {
    return (
        <div className="">
            <div className="p-4 bg-blackOpacity rounded-md">
                <form action="">
                    <div>
                        <label htmlFor="email" className="text-gray">
                            Ваша пошта
                        </label>
                        <Input
                            id="email"
                            placeholder={profile.email}
                            disabled
                            className="mt-2"
                            type="email"
                        />
                    </div>
                    <div className="mt-6">
                        <label htmlFor="nickname" className="text-gray">
                            Ваш нікнейм
                        </label>
                        <Input
                            type="text"
                            id="nickname"
                            placeholder="Ваш нікнейм..."
                            value={profile.nickname}
                            disabled
                            className="mt-2"
                        />
                    </div>
                    <Button
                        type="submit"
                        color="purpleBackground"
                        className="mt-6 mx-auto mb-2"
                    >
                        Зберігти зміни
                    </Button>
                </form>
            </div>
        </div>
    );
};
