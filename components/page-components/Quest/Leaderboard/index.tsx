"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";

interface LeaderboardProps {
    data: {
        id: number;
        nickname: string;
        avatar: string;
        time: string;
        score: string;
    }[];
}

export const Leaderboard = ({ data }: LeaderboardProps) => {
    return (
        <div className="overflow-x-auto bg-blackOpacity pt-4 rounded-lg h-auto">
            <h2 className="text-white text-lg font-semibold mb-4 ml-4">
                Таблиця лідерів
            </h2>
            <table className="w-full min-w-max border-collapse">
                <thead>
                    <tr className="bg-[#242A4D] text-gray-light">
                        <th className="px-4 py-3 text-left">№</th>
                        <th className="px-4 py-3 text-left">Нікнейм</th>
                        <th className="px-4 py-3 text-left">Аватар</th>
                        <th className="px-4 py-3 text-left">Час</th>
                        <th className="px-4 py-3 text-left">Бали</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((player, index) => (
                        <tr
                            key={player.id}
                            className="border-t border-gray-dark bg-blackOpacity-dark text-white"
                        >
                            <td className="px-4 py-2">
                                <span
                                    className={`${
                                        index === 0
                                            ? "text-yellow"
                                            : index === 1
                                            ? "text-gray-light"
                                            : index === 2
                                            ? "text-orange-700"
                                            : "text-gray"
                                    } font-semibold`}
                                >
                                    {index + 1}
                                </span>
                            </td>
                            <td className="px-4 py-2">
                                <Link
                                    href={`/users/${player.id}`}
                                    className="text-purple"
                                >
                                    {player.nickname}
                                </Link>
                            </td>
                            <td className="px-4 py-2">
                                <div className="w-10 h-10 rounded-md border border-purple flex items-center justify-center">
                                    {player.avatar ? (
                                        <Image
                                            src={player.avatar}
                                            alt="Avatar"
                                            width={24}
                                            height={24}
                                        />
                                    ) : (
                                        <AiOutlineUser className="text-purple size-6" />
                                    )}
                                </div>
                            </td>
                            <td className="px-4 py-2 text-gray-light">
                                {player.time}
                            </td>
                            <td className="px-4 py-2 text-gray-light">
                                {player.score}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
