"use client";

import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Textarea";
import { AiOutlineUser } from "react-icons/ai";
import { LuSend } from "react-icons/lu";
import { TbArrowBackUp } from "react-icons/tb";
import { ChatProps } from "./Chat.props";
import { cn } from "@/lib/utils";

export const Chat = ({ isOpened, setIsOpened }: ChatProps) => {
    return (
        <div
            className={cn(
                "fixed left-0 top-0 bottom-0 max-w-[550px] w-auto sm:w-full right-10 sm:right-0 bg-[#16192C] p-3 xsm:p-6 z-20",
                "duration-300 ease-in-out",
                isOpened
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0 pointer-events-none",
            )}
        >
            <Button
                color="purpleBorder"
                className="p-2 absolute xsm:right-4 xsm:top-4 top-2 right-2"
                onClick={() => setIsOpened(false)}
            >
                <TbArrowBackUp className="size-4 xsm:size-6" />
            </Button>
            <div className="flex flex-col h-[100vh] rounded-md">
                <div className="text-center text-lg xsm:text-2xl font-semibold mb-4">
                    Чат учасників тесту
                </div>
                <ul className="flex-grow overflow-y-auto pr-2">
                    {Array(15)
                        .fill(null)
                        .map((_, index) => (
                            <li
                                key={index}
                                className="py-4 border-b border-gray-700"
                            >
                                <div className="flex justify-between">
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-md border border-purple p-3">
                                            <AiOutlineUser className="text-purple size-6" />
                                        </div>
                                        <div>
                                            <div className="text-base xsm:text-lg font-semibold mt-1">
                                                Danil Diachenko
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-gray-dark text-xs xsm:text-sm">
                                        1 хв тому
                                    </div>
                                </div>
                                <p className="text-gray mt-2 text-sm xsm:text-base">
                                    Тест повідомлення
                                </p>
                            </li>
                        ))}
                </ul>
                <form className="sticky bottom-0 p-2 xsm:p-4 mt-4">
                    <label htmlFor="message" className="text-white">
                        Ваше повідомлення
                    </label>
                    <Textarea
                        placeholder="Текст повідомлення..."
                        className="mt-2 text-sm xsm:text-base max-h-[75px] h-full xsm:max-h-none xsm:h-[100px] min-h-0"
                    />
                    <Button
                        color="purpleBackground"
                        className="mt-4 mb-4 flex items-center gap-2 text-sm xsm:text-base"
                    >
                        <span>Надіслати</span>
                        <LuSend className="size-3 xsm:size-5" />
                    </Button>
                </form>
            </div>
        </div>
    );
};
