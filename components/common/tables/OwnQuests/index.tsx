import Link from "next/link";
import { OwnQuestsProps } from "./OwnQuests.props";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Button } from "@/components/ui/Button";

export const OwnQuests = ({ profile, isCreatedByMe }: OwnQuestsProps) => {
    return (
        <div className="bg-blackOpacity-dark rounded-md">
            <div className="flex justify-between items-center p-4">
                <h2 className="text-xl font-semibold text-white">
                    {isCreatedByMe
                        ? "Мої квести"
                        : `Квести користувача ${profile.email}`}
                </h2>
                {isCreatedByMe && (
                    <Button color="purpleBorder" className="py-2 px-4">
                        Створити квест
                    </Button>
                )}
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-gray w-full">
                    <thead>
                        <tr className="bg-[#242A4D]">
                            <th className="p-3 text-left w-[200px]">Назва</th>
                            <th className="p-3 text-left w-[120px]">
                                Картинка
                            </th>
                            <th className="p-3 text-left w-[100px]">Час</th>
                            <th className="p-3 text-left w-[120px]">
                                Зіграно раз
                            </th>
                            <th className="p-3 text-left w-[120px]">Рейтинг</th>
                            <th className="p-3 text-left w-[150px]">
                                Кількість завдань
                            </th>
                            {isCreatedByMe && (
                                <th className="p-3 text-left w-[100px]">Дії</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {profile.createdQuests.map((quest, index) => (
                            <tr
                                key={index}
                                className="border-t border-gray-700"
                            >
                                <td className="p-3 font-semibold">
                                    <Link href="#" className="text-purple-400">
                                        {quest.title}
                                    </Link>
                                </td>
                                <td className="p-3">
                                    <img
                                        src={quest.imageUrl}
                                        alt={quest.title}
                                        className="w-16 h-12 object-cover rounded-md"
                                    />
                                </td>
                                <td className="p-3">{quest.timeLimit} хв.</td>
                                <td className="p-3">
                                    {quest.leaderboard.length}
                                </td>
                                <td className="p-3">⭐ {quest.rating}</td>
                                <td className="p-3">10</td>
                                {isCreatedByMe && (
                                    <td className="p-3 flex gap-2">
                                        <button className="p-2 bg-purple-600 rounded-md">
                                            <AiOutlineEdit className="text-white" />
                                        </button>
                                        <button className="p-2 bg-red-600 rounded-md">
                                            <AiOutlineDelete className="text-white" />
                                        </button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
