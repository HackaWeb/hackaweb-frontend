import { IoTrophyOutline } from "react-icons/io5";

export const GeneralResults = () => {
    return (
        <div className="bg-blackOpacity p-6 rounded-lg">
            <div className="text-xl font-bold">Ваші результати</div>
            <ul className="mt-4 pb-2 border-b-2 border-gray border-opacity-10 relative text-lg">
                <IoTrophyOutline className="absolute right-0 bottom-0 size-9 text-purple" />
                <li>
                    Відсоток правильних відповідей:{" "}
                    <span className="text-purple">95</span> / 100 %
                </li>
                <li className="mt-1">
                    Час проходження: <span className="text-purple">35</span> хв
                </li>
                <li className="mt-1">
                    Місце в рейтингу тесту:{" "}
                    <span className="text-purple">3</span> з 20
                </li>
            </ul>
            <ul className="flex gap-3 mt-4">
                <li className="text-yellow p-1 px-2 border-2 border-purple rounded-md">
                    Топ 3
                </li>
                <li className="text-yellow p-1 px-2 border-2 border-purple rounded-md">
                    Спрінтер
                </li>
                <li className="text-yellow p-1 px-2 border-2 border-purple rounded-md">
                    Макс бал
                </li>
            </ul>
        </div>
    );
};
