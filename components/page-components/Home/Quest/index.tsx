import Image from "next/image";
import { QuestProps } from "./Quest.props";
import Link from "next/link";
import { RenderRating } from "@/helpers/RenderRating";
import { FaUser } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

export const Quest = ({ quest }: QuestProps) => {
    return (
        <div className="bg-blackOpacity-dark hover:scale-105 transition duration-200 rounded-lg">
            <Image
                src={quest.file}
                alt={quest.title}
                className="w-full h-auto"
                width={0}
                height={0}
                sizes="100vw"
            />
            <div className="p-3">
                <Link href="/quests/1" className="font-semibold text-lg">
                    {quest.title}
                </Link>
                <RenderRating rating={4} className="mt-1 gap-[4px]" />
                <div className="mt-3 text-sm">
                    від{" "}
                    <Link href="/users/1">
                        {quest.owner.firstName + " " + quest.owner.lastName}
                    </Link>{" "}
                    (<span className="text-purple">{quest.owner.rating}</span> з
                    5)
                </div>
                <div className="flex items-center justify-between text-gray mt-10">
                    <div className="flex items-center gap-2">
                        <FaUser />
                        {quest.leaderboard.length}
                    </div>
                    <div className="flex items-center gap-1">
                        {quest.duration} хв.
                        <MdOutlineAccessTimeFilled />
                    </div>
                </div>
            </div>
        </div>
    );
};
