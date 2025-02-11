"use client";

import Image from "next/image";
import { GeneraInfoProps } from "./GeneralInfo.props";
import { Button } from "@/components/ui/Button";
import { FaUser } from "react-icons/fa6";
import { RenderRating } from "@/helpers/RenderRating";
import Link from "next/link";
import { useRedirect } from "@/hooks/useRedirect";

export const GeneralInfo = ({ quest }: GeneraInfoProps) => {
    const redirect = useRedirect();

    return (
        <div className="bg-blackOpacity rounded-md">
            <Image
                src={quest.imageUrl}
                alt={quest.title}
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-t-md"
            />
            <div className="p-4">
                <div className="text-purple text-lg font-bold">
                    {quest.title}
                </div>
                <div className="flex gap-5 mt-4">
                    <Button
                        className="bg-purple gap-2"
                        color="purpleBackground"
                        onClick={() => redirect("/quest-completing/1")}
                    >
                        <FaUser className="size-4" />
                        <span>Грати зараз</span>
                    </Button>
                </div>
                <div className="text-gray mt-2">
                    <span className="font-semibold text-white">112</span> разів
                    зіграно
                </div>
                <p className="text-gray mt-6">
                    Тест опис опис опис опис опис опис опис описописопи Тест
                    опис опис опис опис опис опис опис описописопис Тест опис
                    опис опис опис опис опис опис описописописс
                </p>
                <RenderRating
                    rating={quest.rate}
                    className="mt-3 gap-[6px]"
                />
                <div className="text-gray mt-3">Створено {quest.createdAt}</div>
                <Link href={`/users/${quest.owner.id}`}>
                    {quest.owner.firstName + " " + quest.owner.lastName}
                </Link>
            </div>
        </div>
    );
};
