import { getAchievements } from "@/data/getAchievements";
import { Achievement } from "../../../common/profile/Achievement";
import { LeftColumnProps } from "./LeftColumn.props";
import { IoTrophyOutline } from "react-icons/io5";
import { Button } from "@/components/ui/Button";
import { Avatar } from "./Avatar";

export const LeftColumn = ({ profile }: LeftColumnProps) => {
    const achievements = getAchievements(profile);

    return (
        <div>
            <div className="flex flex-col gap-2 bg-blackOpacity p-4 rounded-md">
                <Avatar profile={profile} />
                <div className="flex flex-col gap-4 w-full">
                    <div className="relative border-b-2 border-[#7e7e7e23] pb-4">
                        {achievements.unlocked.map((achievement, index) => (
                            <Achievement key={index} title={achievement} />
                        ))}
                        <IoTrophyOutline className="size-7 text-purple absolute right-0 bottom-0" />
                    </div>
                    <div className="relative">
                        {achievements.locked.map((achievement, index) => (
                            <Achievement
                                className="text-sm opacity-50"
                                key={index}
                                title={achievement}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Button
                className="text-red w-full hover:text-white mt-4"
                color="redBorder"
            >
                Видалити акаунт
            </Button>
        </div>
    );
};
