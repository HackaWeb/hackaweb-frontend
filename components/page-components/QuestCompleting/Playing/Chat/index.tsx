"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Textarea";
import { AiOutlineUser } from "react-icons/ai";
import { LuSend } from "react-icons/lu";
import { TbArrowBackUp } from "react-icons/tb";
import { ChatProps } from "./Chat.props";
import { cn } from "@/helpers/cn";
import { useChat } from "@/hooks/useChat";
import { printUserNickname } from "@/helpers/printUserNickname";
import { toast } from "react-toastify";
import Image from "next/image";

export const Chat = ({ isOpened, setIsOpened, user }: ChatProps) => {
    const messagesEndRef = useRef<HTMLUListElement>(null);

    const { messages, sendMessage, isConnected } = useChat();

    const [input, setInput] = useState("");

    const onMessageSend = () => {
        if (!input.trim()) {
            toast.error("Повідомлення не може бути пустим");
            return;
        }

        sendMessage(printUserNickname(user.firstName, user.lastName), input);
        setInput("");
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop =
                messagesEndRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <>
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
                        Чат учасників квесту
                    </div>

                    <ul
                        ref={messagesEndRef}
                        className="flex-grow overflow-y-auto pr-2"
                    >
                        {messages.map((msg, index) => (
                            <li
                                key={index}
                                className="py-4 border-b border-gray-700"
                            >
                                <div className="flex justify-between">
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-md border border-purple p-2 w-14 h-14 flex items-center justify-center">
                                            {user.avatar ? (
                                                <Image
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    alt={printUserNickname(
                                                        user.firstName,
                                                        user.lastName,
                                                    )}
                                                    src={user.avatar}
                                                />
                                            ) : (
                                                <AiOutlineUser className="text-purple size-7" />
                                            )}
                                        </div>
                                        <div>
                                            <div className="text-base xsm:text-lg font-semibold mt-1">
                                                {msg.user}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-gray-dark text-xs xsm:text-sm">
                                        {msg.timestamp}
                                    </div>
                                </div>
                                <p className="text-gray mt-2 text-sm xsm:text-base">
                                    {msg.text}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <form
                        className="sticky bottom-0 p-2 xsm:p-4 mt-4"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <label htmlFor="message" className="text-white">
                            Ваше повідомлення
                        </label>
                        <Textarea
                            placeholder="Текст повідомлення..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="mt-2 text-sm xsm:text-base max-h-[75px] h-full xsm:max-h-none xsm:h-[100px] min-h-0"
                        />
                        <Button
                            color="purpleBackground"
                            className="mt-4 mb-4 flex items-center gap-2 text-sm xsm:text-base"
                            onClick={onMessageSend}
                        >
                            <span>Надіслати</span>
                            <LuSend className="size-3 xsm:size-5" />
                        </Button>
                    </form>
                </div>
            </div>
            <div
                className={cn(
                    "fixed top-0 left-0 bottom-0 right-0 bg-black opacity-50 z-10",
                    "duration-300 ease-in-out",
                    isOpened
                        ? "opacity-50 pointer-events-auto"
                        : "opacity-0 pointer-events-none",
                )}
                onClick={() => setIsOpened(false)}
            ></div>
        </>
    );
};
