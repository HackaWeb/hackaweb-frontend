"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Textarea";
import { AiOutlineUser } from "react-icons/ai";
import { LuSend } from "react-icons/lu";
import { TbArrowBackUp } from "react-icons/tb";
import { ChatProps } from "./Chat.props";
import { cn } from "@/lib/utils";

export const Chat = ({ isOpened, setIsOpened }: ChatProps) => {
    const [mounted, setMounted] = useState(isOpened);

    useEffect(() => {
        if (isOpened) {
            setMounted(true);
        } else {
            setTimeout(() => setMounted(false), 300);
        }
    }, [isOpened]);

    return (
        <div
            className={cn(
                "fixed left-0 top-0 bottom-0 max-w-[550px] w-full bg-[#16192C] p-6 z-20",
                " duration-300 ease-in-out",
                isOpened
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0 pointer-events-none",
            )}
        >
            <Button
                color="purpleBorder"
                className="p-2 absolute right-4 top-4"
                onClick={() => setIsOpened(false)}
            >
                <TbArrowBackUp className="size-6" />
            </Button>
            <div className="flex flex-col h-[100vh] rounded-md">
                <div className="text-center text-2xl font-semibold mb-4">
                    Чат учасників тесту
                </div>
                <ul className="flex-grow overflow-y-auto pr-2">
                    {Array(15)
                        .fill(null)
                        .map((_, index) => (
                            <li
                                key={index}
                                className="flex justify-between py-4 border-b border-gray-700"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="rounded-md border border-purple p-3">
                                        <AiOutlineUser className="text-purple size-6" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-semibold">
                                            Danil Diachenko
                                        </div>
                                        <p className="text-gray mt-2">
                                            Тест повідомлення
                                        </p>
                                    </div>
                                </div>
                                <div className="text-gray-dark text-sm">
                                    1 хв тому
                                </div>
                            </li>
                        ))}
                </ul>

                {/* Форма остается внизу */}
                <form className="sticky bottom-0 p-4 mt-4">
                    <label htmlFor="message" className="text-white">
                        Ваше повідомлення
                    </label>
                    <Textarea
                        placeholder="Текст повідомлення..."
                        className="mt-2 h-[100px]"
                    />
                    <Button
                        color="purpleBackground"
                        className="mt-4 flex items-center gap-2"
                    >
                        <span>Надіслати</span>
                        <LuSend className="size-5" />
                    </Button>
                </form>
            </div>
        </div>
    );
};
