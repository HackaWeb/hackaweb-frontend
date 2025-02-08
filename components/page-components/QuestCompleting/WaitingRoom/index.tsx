import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { FaCopy, FaUser } from "react-icons/fa6";
import { FiLoader } from "react-icons/fi";
import { TbArrowBackUp } from "react-icons/tb";

export const WaitingRoom = () => {
    return (
        <div>
            <div className="bg-blackOpacity-DEFAUlT pt-6">
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
                        className="mx-auto mt-3 rounded-lg max-w-[800px]"
                    />
                    <h1 className="py-10 text-center">Назва Квесту</h1>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-6 px-20 items-start">
                <div className="bg-blackOpacity-DEFAUlT p-6 rounded-lg">
                    <div className="text-xl font-bold">Учасники</div>
                    <ul>
                        <li className="flex items-center justify-between p-5 bg-blackOpacity-dark mt-4 rounded-md">
                            <div className="font-bold">Danil Diachenko</div>
                            <FaUser className="size-6" />
                        </li>
                        <li className="p-5 text-gray bg-blackOpacity-dark mt-3 rounded-md">
                            Поділіться кодом з іншими...
                        </li>
                        <li className="p-5 text-gray bg-blackOpacity-dark mt-3 rounded-md">
                            Поділіться кодом з іншими...
                        </li>
                        <li className="p-5 text-gray bg-blackOpacity-dark mt-3 rounded-md">
                            Поділіться кодом з іншими...
                        </li>
                    </ul>
                </div>
                <div className="bg-blackOpacity-DEFAUlT p-6 rounded-lg flex items-center justify-between text-gray">
                    <div className="font-medium text-lg">
                        Чекаємо на інших гравців
                    </div>
                    <FiLoader className="size-7" />
                </div>
                <div className="bg-blackOpacity-DEFAUlT flex items-center justify-between p-6 rounded-lg text-gray">
                    <span className="font-medium text-lg">
                        Ваш код лобі:{" "}
                        <span className="text-white ml-1">13GFGF4</span>
                    </span>
                    <button>
                        <FaCopy className="size-7 text-purple hover:text-purple-light duration-300" />
                    </button>
                </div>
            </div>
        </div>
    );
};
