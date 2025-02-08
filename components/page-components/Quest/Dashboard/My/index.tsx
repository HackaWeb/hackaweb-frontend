import Block from "@/components/ui/Block";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import Rating from "@/components/common/Rating";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import React from "react";
import { MyQuestsHeader } from "../Header/header";
import { MyQuestsDashboardProps } from "./Dashboard.props";
import DashboardHeader from "../Header";

const MyQuestsDashboard = ({ quests }: MyQuestsDashboardProps) => {
    return (
        <Block className="p-0 bg-black">
            <div className="flex justify-between w-full px-4 pt-4 items-center gap-8">
                <h2 className="font-bold text-xl">Мої тести</h2>
                <Button color="purpleBorder">Створити тест</Button>
            </div>
            <table className="table-auto border-spacing-2 text-gray">
                <thead>
                    <DashboardHeader
                        className="bg-gray-superdark"
                        items={MyQuestsHeader}
                    />
                </thead>
                <tbody>
                    {quests.length !== 0 &&
                        quests.map((quest) => (
                            <tr
                                key={quest.id}
                                className="border-b border-[#242A4D]"
                            >
                                <td className="px-4 py-2">
                                    <Link href={`/quest/${quest.id}`}>
                                        {quest.title}
                                    </Link>
                                </td>
                                <td className="px-4 py-2">
                                    <Image
                                        src={quest.imageUrl}
                                        alt="quest image"
                                        width={64}
                                        height={64}
                                    />
                                </td>
                                <td className="px-4 py-2">
                                    <p>{quest.timeLimit} хв.</p>
                                </td>
                                <td className="px-4 py-2">
                                    <p>100</p>
                                </td>
                                {/*TODO: Зіграно разів*/}
                                <td className="px-4 py-2">
                                    <Rating rating={quest.rating} />
                                </td>
                                <td className="px-4 py-2">
                                    <p>10</p>
                                </td>
                                {/*TODO: Кількість завдань*/}
                                <td className="px-4 py-2 flex gap-2">
                                    <CiEdit className="w-4 h-4 p-2 border border-purple text-purple" />
                                    <FaRegTrashAlt className="w-4 h-4 p-2 border border-red text-red" />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </Block>
    );
};

export default MyQuestsDashboard;
