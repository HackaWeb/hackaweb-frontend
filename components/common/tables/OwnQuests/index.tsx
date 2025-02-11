import Link from "next/link";
import { OwnQuestsProps } from "./OwnQuests.props";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Button } from "@/components/ui/Button";

export const OwnQuests = async ({
    profile,
    isCreatedByMe,
    ownQuests,
}: OwnQuestsProps) => {
    console.log(ownQuests);
    return (
        ownQuests && (
            <div className="bg-blackOpacity rounded-md overflow-x-auto w-full">
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-xl font-semibold text-white">
                        {isCreatedByMe
                            ? "Мої квести"
                            : `Квести користувача ${profile.firstName} ${profile.lastName}`}
                    </h2>
                    {isCreatedByMe && (
                        <Button color="purpleBorder" className="py-2 px-4">
                            Створити квест
                        </Button>
                    )}
                </div>
                {ownQuests.length ? (
                    <div className="overflow-x-auto w-full">
                        <table className="min-w-max border-collapse text-gray w-full">
                            <thead>
                                <tr className="bg-[#242A4D]">
                                    <th className="p-3 text-left w-[200px]">
                                        Назва
                                    </th>
                                    <th className="p-3 text-left w-[80px]">
                                        Картинка
                                    </th>
                                    <th className="p-3 text-left w-[100px]">
                                        Час
                                    </th>
                                    <th className="p-3 text-left w-[120px]">
                                        Зіграно раз
                                    </th>
                                    <th className="p-3 text-left w-[120px]">
                                        Рейтинг
                                    </th>
                                    {/* <th className="p-3 text-left w-[150px]">
                                        Кількість завдань
                                    </th> */}
                                    {isCreatedByMe && (
                                        <th className="p-3 text-left w-[100px]">
                                            Дії
                                        </th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {ownQuests.map((quest, index) => (
                                    <tr
                                        key={index}
                                        className="border-t border-gray-700"
                                    >
                                        <td className="p-3 font-semibold">
                                            <Link
                                                href={`/quests/${quest.id}`}
                                                className="text-purple-400"
                                            >
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
                                        <td className="p-3">
                                            {quest.duration} хв.
                                        </td>
                                        <td className="p-3">
                                            {quest.passCount}
                                        </td>
                                        <td className="p-3">
                                            {quest.rate || 0}
                                        </td>
                                        {/* <td className="p-3">
                                            {quest.questions?.length}
                                        </td> */}
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
                ) : (
                    <div className="bg-blackOpacity-dark text-gray p-4 rounded-lg">
                        {isCreatedByMe
                            ? `Ви ще не створили жодного квесту`
                            : `Користувач ще не створив жодного квесту`}
                    </div>
                )}
            </div>
        )
    );
};
