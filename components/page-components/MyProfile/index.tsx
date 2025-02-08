import { Button } from "@/components/ui/Button";
import { AvatarControls } from "./Avatar/Controls";
import { ReturnBtn } from "@/components/ui/ReturnBtn";
import AchievementGroup from "./Achievement/Group";
import { Achievement } from "./Achievement";
import { MyProfileProps } from "./MyProfile.props";
import { getAchievements } from "@/data/getAchievements";
import { IoTrophyOutline } from "react-icons/io5";
import ProfileControls from "./Controls";
import QuestDashboard from "../Quest/Dashboard";
import UserQuestsDashboard from "../Quest/Dashboard/User";
import CompletedQuestsDashboard from "../Quest/Dashboard/Completed";

export const MyProfilePageComponent = ({ profile }: MyProfileProps) => {
    const achievements = getAchievements(profile);

    return (
        <div>
            <h1>Мій кабінет</h1>
            <ReturnBtn className="mt-4" />
            <div className="flex flex-wrap gap-8 mt-8">
                <div className="flex flex-col gap-8 bg-blackOpacity p-4">
                    <AvatarControls avatarParams={{ rating: profile.rating }} />
                    <div className="flex flex-col gap-3 w-full">
                        <AchievementGroup className="relative border-b-2 border-[#7e7e7e7d] pb-4">
                            {achievements.unlocked.map((achievement, index) => (
                                <Achievement key={index} title={achievement} />
                            ))}
                            <IoTrophyOutline className="size-7 text-purple absolute right-0 bottom-0" />
                        </AchievementGroup>
                        <AchievementGroup className="relative">
                            {achievements.locked.map((achievement, index) => (
                                <Achievement
                                    className="text-sm opacity-50"
                                    key={index}
                                    title={achievement}
                                />
                            ))}
                        </AchievementGroup>
                    </div>
                    <Button
                        className="text-red w-full hover:text-white"
                        color="redBorder"
                    >
                        Видалити акаунт
                    </Button>
                </div>
                <ProfileControls
                    defaultEmail={profile.email}
                    defaultName={profile.nickname}
                />
                {/* <QuestDashboard className="min-w-1/2">
                    <UserQuestsDashboard
                        title="Мої тести"
                        quests={profile.createdQuests}
                        isActionable={true}
                    />
                    <CompletedQuestsDashboard
                        title="Пройдені тести"
                        attempts={profile.completedQuests}
                    />
                </QuestDashboard> */}
            </div>
        </div>
    );
};
