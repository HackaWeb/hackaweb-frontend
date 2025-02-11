"use client";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { TbArrowBackUp } from "react-icons/tb";
import { WaitingRoomProps } from "./WaitingRoom.props";
import { useRedirect } from "@/hooks/useRedirect";

export const WaitingRoom = ({ onStartQuestClick, quest }: WaitingRoomProps) => {
    const redirect = useRedirect();
    return (
        <>
            <div className="bg-blackOpacity pt-6">
                <Button
                    color="purpleBorder"
                    onClick={() => redirect("/")}
                    className="ml-5"
                >
                    <TbArrowBackUp className="size-6" />
                    <span>Повернутися назад</span>
                </Button>
                <div>
                    <Image
                        src={quest.imageUrl}
                        alt="Квест"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="mx-auto mt-3 rounded-lg max-w-[800px] px-6"
                    />
                    <h1 className="py-10 text-center">{quest.title}</h1>
                </div>
            </div>
            <Button
                color="purpleBackground"
                className="mt-4 mx-auto max-w-[200] w-full mb-10"
                onClick={onStartQuestClick}
            >
                Почати квест
            </Button>
        </>
    );
};
