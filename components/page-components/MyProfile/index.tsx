import { Button } from "@/components/ui/Button";
import AvatarControls from "./Avatar/Controls";
import { ReturnBtn } from "@/components/ui/ReturnBtn";
import AchievementGroup from "./Achievement/Group";
import Achievement from "./Achievement";
import { MyProfileProps } from "./MyProfile.props";

export const MyProfilePageComponent = ({ profile }: MyProfileProps) => {
    return (
        <div>
            <h1>Мій кабінет</h1>
            <ReturnBtn className="mt-4" />
            <div className="flex flex-wrap gap-8 mt-8">
                <div className="flex flex-col gap-8">
                    <AvatarControls
                        avatarParams={{ rating: 4 }}
                        recentAchievements={recentAchievements}
                        upcomingAchievements={upcomingAchievements}
                    />
                    <div className="flex flex-col gap-3 w-full">
                        <AchievementGroup>
                            {recentAchievements.map((a) => (
                                <Achievement key={a.name} achievement={a} />
                            ))}
                        </AchievementGroup>
                        <hr />
                        <AchievementGroup className="relative">
                            {upcomingAchievements.map((a) => (
                                <Achievement
                                    className="text-[6pt] opacity-50"
                                    key={a.name}
                                    achievement={a}
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
                    defaultEmail={userEmail}
                    defaultName={userName}
                />
                <QuestDashboard
                    className="min-w-1/2"
                    myQuests={myQuests}
                    questAttempts={questAttempts}
                    isActionable={true}
                >
                    <UserQuestsDashboard
                        title="Мої тести"
                        quests={myQuests}
                        isActionable={true}
                    />
                    <CompletedQuestsDashboard
                        title="Пройдені тести"
                        attempts={questAttempts}
                    />
                </QuestDashboard>
            </div>
        </div>
    );
};
