import { Button } from "@/components/ui/Button";
import AvatarControls from "./Avatar/Controls";
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
                <div className="flex flex-col gap-8">
                    <AvatarControls avatarParams={{ rating: profile.rating }} />
                    <div className="flex flex-col gap-3 w-full">
                        <AchievementGroup>
                            {achievements.unlocked.map((achievement, index) => (
                                <Achievement key={index} title={achievement} />
                            ))}
                        </AchievementGroup>
                        <hr />
                        <AchievementGroup className="relative">
                            {achievements.locked.map((achievement, index) => (
                                <Achievement
                                    className="text-[6pt] opacity-50"
                                    key={index}
                                    title={achievement}
                                />
                            ))}
                            <IoTrophyOutline className="w-4 h-4 text-purple absolute right-2 bottom-2" />
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
