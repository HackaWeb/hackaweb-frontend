import Link from "next/link";
import { CompletedQuestsProps } from "./CompletedQuests.props";

export const CompletedQuests = ({ profile }: CompletedQuestsProps) => {
    return (
        <div className="bg-blackOpacity rounded-md mt-6">
            <div className="bg-blackOpacity-dark p-4">
                <h2 className="text-xl font-semibold text-white">
                    Пройдені тести
                </h2>
            </div>
            <div className="overflow-auto w-[800px] whitespace-nowrap">
                <table className="min-w-full border-collapse text-gray w-full">
                    <thead>
                        <tr className="bg-[#242A4D]">
                            <th className="p-3 text-left">Назва</th>
                            <th className="p-3 text-left">Картинка</th>
                            <th className="p-3 text-left">Затрачений час</th>
                            <th className="p-3 text-left">Правильність</th>
                            <th className="p-3 text-left">Дата</th>
                        </tr>
                    </thead>
                    <tbody>
                        {profile.completedQuests.map((quest) => (
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
