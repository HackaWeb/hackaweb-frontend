import Block from "@/components/ui/Block";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { CompletedQuestsHeader } from "../Header/header";
import DashboardHeader from "../Header";
import { CompletedQuestsDashboardProps } from "./CompletedQuestsDashboard.props";

const CompletedQuestsDashboard = ({
    attempts,
    title,
}: CompletedQuestsDashboardProps) => {
    return (
        <Block className="p-0 bg-black w-full">
            <div className="flex justify-start w-full px-4 pt-4 items-center gap-8">
                <h2 className="font-bold text-xl">{title}</h2>
            </div>
            <table className="table-auto border-spacing-2 text-gray w-full">
                <thead>
                    <DashboardHeader
                        className="bg-gray-superdark"
                        items={CompletedQuestsHeader}
                    />
                </thead>
                <tbody>
                    {attempts.length !== 0 &&
                        attempts.map((attempt, index) => (
                            <tr
                                key={index}
                                className="border-b border-[#242A4D]"
                            >
                                <td className="px-4 py-2">
                                    <Link href={`/quest/${attempt.questId}`}>
                                        {attempt.questTitle}
                                    </Link>
                                </td>
                                <td className="px-4 py-2">
                                    <Image
                                        src={attempt.questImageUrl}
                                        alt="quest image"
                                        width={64}
                                        height={64}
                                    />
                                </td>
                                <td className="px-4 py-2">
                                    <p>
                                        {attempt.mark}/{attempt.maxMark}
                                    </p>
                                </td>
                                <td className="px-4 py-2">
                                    <p>{attempt.lastPlayedTime}</p>
                                </td>
                                <td className="px-4 py-2 w-1/3">
                                    <p>{attempt.status}</p>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </Block>
    );
};

export default CompletedQuestsDashboard;
