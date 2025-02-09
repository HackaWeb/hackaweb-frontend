import Link from "next/link";
import { MyQuestsProps } from "./MyQuests.props";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export const MyQuests = ({ profile }: MyQuestsProps) => {
    return (
        <div className="bg-blackOpacity rounded-md">
            <div className="bg-blackOpacity-dark p-4">
                <h2 className="text-xl font-semibold text-white">Мої тести</h2>
            </div>
            <div className="overflow-auto w-[800px] whitespace-nowrap">
                <table className="min-w-full border-collapse text-gray w-full">
                    <thead>
                        <tr className="bg-[#242A4D]">
                            <th className="p-3 text-left">Назва</th>
                            <th className="p-3 text-left">Картинка</th>
                            <th className="p-3 text-left">Час</th>
                            <th className="p-3 text-left">Зіграно раз</th>
                            <th className="p-3 text-left">Рейтинг</th>
                            <th className="p-3 text-left">Кількість завдань</th>
                            <th className="p-3 text-left">Дії</th>
                        </tr>
                    </thead>
                    <tbody>
                        {profile.createdQuests.map((quest) => (
                            <tr
                                key={quest.id}
                                className="border-t border-gray-700 bg-blackOpacity-dark"
                            >
                                <td className="p-3 font-semibold">
                                    <Link href="#">{quest.title}</Link>
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
                                <td className="p-3 flex gap-2">
                                    <button className="p-2 bg-purple-600 rounded-md">
                                        <AiOutlineEdit className="text-white" />
                                    </button>
                                    <button className="p-2 bg-red-600 rounded-md">
                                        <AiOutlineDelete className="text-white" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
