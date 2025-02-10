import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";
import { WaitingRoomProps } from "./WaitingRoom.props";

export const WaitingRoom = ({ onStartQuestClick }: WaitingRoomProps) => {
    return (
        <>
            <div className="bg-blackOpacity pt-6">
                <Link href="#" className="block ml-6">
                    <Button color="purpleBorder">
                        <TbArrowBackUp className="size-6" />
                        <span>Повернутися назад</span>
                    </Button>
                </Link>
                <div>
                    <Image
                        src="/test.png"
                        alt="Квест"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="mx-auto mt-3 rounded-lg max-w-[800px] px-6"
                        loading="eager"
                    />
                    <h1 className="py-10 text-center">Назва Квесту</h1>
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
