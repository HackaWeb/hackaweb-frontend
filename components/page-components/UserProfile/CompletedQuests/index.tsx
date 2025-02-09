import Link from "next/link";
import { CompletedQuestsProps } from "./CompletedQuests.props";

export const CompletedQuests = ({ profile }: CompletedQuestsProps) => {
    return (
        <div className="bg-blackOpacity-dark rounded-md mt-6">
            <div className="p-4">
                <h2 className="text-xl font-semibold text-white">
                    Пройдені тести користувачем {profile.nickname}
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
                            <th className="p-3 text-left w-[150px]">
                                Затрачений час
                            </th>
                            <th className="p-3 text-left w-[150px]">
                                Правильність
                            </th>
                            <th className="p-3 text-left w-[150px]">Дата</th>
                        </tr>
                    </thead>
                    <tbody>
                        {profile.completedQuests.map((quest) => (
                            <tr
                                key={quest.id}
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
                                <td className="p-3">37 / 60 хв.</td>
                                <td className="p-3">87 / 100 %</td>
                                <td className="p-3">08.02.2025</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
