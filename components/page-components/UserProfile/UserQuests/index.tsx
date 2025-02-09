import Link from "next/link";
import { UserQuestsProps } from "./UserQuests.props";

export const UserQuests = ({ profile }: UserQuestsProps) => {
    return (
        <div className="rounded-md bg-blackOpacity-dark">
            <div className="p-4">
                <h2 className="text-xl font-semibold text-white">
                    Тести користувача {profile.nickname}
                </h2>
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
                                <td className="p-3">{quest.timesPlayed}</td>
                                <td className="p-3">⭐ {quest.rating}</td>
                                <td className="p-3">10</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
