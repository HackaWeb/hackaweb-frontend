import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { MyProfileProps } from "./MyProfile.props";
import { ProfileControls } from "./Controls";
import { LeftColumn } from "./LeftColumn";

export const MyProfilePageComponent = ({ profile }: MyProfileProps) => {
    return (
        <div>
            <h1>Мій кабінет</h1>
            <ReturnBtn className="mt-4" />
            <div className="grid items-start gap-6 mt-8 grid-cols-[240px_300px_auto]">
                <LeftColumn profile={profile} />
                <ProfileControls
                    defaultEmail={profile.email}
                    defaultNickname={profile.nickname}
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
