import Block from "@/components/ui/Block";
import { MdModeEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import React from "react";
import {
    ActionableUserQuestsHeader,
    NonActionableUserQuestsHeader,
} from "../Header/header";
import { MyQuestsDashboardProps } from "./UserQuestsDashboard.props";
import DashboardHeader from "../Header";
import { RenderRating } from "@/helpers/RenderRating";

const UserQuestsDashboard = ({
    quests,
    title,
    isActionable,
}: MyQuestsDashboardProps) => {
    return (
        <Block className="p-0 bg-black">
            <div className="flex justify-between w-full px-4 pt-4 items-center gap-8">
                <h2 className="font-bold text-xl">{title}</h2>
                {isActionable && (
                    <Button color="purpleBorder">Створити тест</Button>
                )}
            </div>
            <table className="table-auto border-spacing-2 text-gray">
                <thead>
                    <DashboardHeader
                        className="bg-gray-superdark"
                        items={
                            isActionable
                                ? ActionableUserQuestsHeader
                                : NonActionableUserQuestsHeader
                        }
                    />
                </thead>
                <tbody>
                    {quests.length !== 0 &&
                        quests.map((quest, index) => (
                            <tr
                                key={index}
                                className="border-b border-[#242A4D]"
                            >
                                <td className="px-4 py-2">
                                    <Link href={`/quest/${quest.id}`}>
                                        {quest.title}
                                    </Link>
                                </td>
                                <td className="px-4 py-2">
                                    <Image
                                        src={quest.file}
                                        alt="quest image"
                                        width={64}
                                        height={64}
                                    />
                                </td>
                                <td className="px-4 py-2">
                                    <p>{quest.duration} хв.</p>
                                </td>
                                <td className="px-4 py-2">
                                    <p>100</p>
                                </td>
                                {/*TODO: Зіграно разів*/}
                                <td className="px-4 py-2">
                                    <RenderRating rating={quest.rating} />
                                </td>
                                <td className="px-4 py-2">
                                    <p>10</p>
                                </td>
                                {/*TODO: Кількість завдань*/}
                                {isActionable && (
                                    <td className="px-4 py-2 flex gap-2">
                                        <div className="border rounded-md border-purple p-1">
                                            <MdModeEdit className="size-4 text-purple" />
                                        </div>
                                        <div className="border rounded-md border-red p-1">
                                            <IoMdTrash className="size-4 text-red" />
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                </tbody>
            </table>
        </Block>
    );
};

export default UserQuestsDashboard;
