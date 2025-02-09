import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { LeftColumnProps } from "./LeftColumn.props";
import { getAchievements } from "@/data/getAchievements";
import { RenderRating } from "@/helpers/RenderRating";
import { Button } from "@/components/ui/Button";
import { IoTrophyOutline } from "react-icons/io5";

export const LeftColumn = ({ profile }: LeftColumnProps) => {
    const achievements = getAchievements(profile);

    return (
        <div className="">
            <div className="p-4 bg-blackOpacity rounded-md">
                <div className="w-full h-auto aspect-square border border-purple rounded-md p-2 relative">
                    <RenderRating
                        rating={profile.rating}
                        className="gap-[6px] absolute top-1 left-1"
                    />
                    <div className="bg-blackOpacity-dark w-full h-full flex items-center justify-center rounded-md">
                        <AiOutlineUser className="text-purple size-20" />
                    </div>
                </div>
                <Link href="#" className="underline mt-2 text-center block">
                    Змінити аватар
                </Link>
                <ul className="mt-6 pb-4 border-b-2 border-b-gray-300 border-opacity-10 flex flex-col justify-start gap-2 relative">
                    {achievements.unlocked.map((achiev, index) => (
                        <li
                            key={index}
                            className="bg-blackOpacity-dark text-yellow border-2 border-purple p-1 rounded-md w-fit inline-block"
                        >
                            {achiev}
                        </li>
                    ))}
                    <IoTrophyOutline className="absolute right-0 bottom-0 text-purple size-8" />
                </ul>
                <ul className="mt-4 flex flex-col gap-2">
                    {achievements.locked.map((achiev, index) => (
                        <li
                            key={index}
                            className="bg-blackOpacity-dark text-yellow border-2 border-purple p-1 opacity-50 text-sm rounded-md w-fit inline-block"
                        >
                            {achiev}
                        </li>
                    ))}
                </ul>
            </div>
            <Button className="mt-6 w-full" color="redBorder">
                Видалити акаунт
            </Button>
        </div>
    );
};
