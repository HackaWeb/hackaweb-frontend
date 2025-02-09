import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { UserProfileProps } from "./UserProfile.props";
import { LeftColumn } from "./LeftColumn";
import { CompletedQuests } from "@/components/common/tables/CompletedQuests";
import { OwnQuests } from "@/components/common/tables/OwnQuests";

export const UserProfilePageComponent = ({ profile }: UserProfileProps) => {
    return (
        <div>
            <h1>Профіль користувача {profile.nickname}</h1>
            <ReturnBtn className="mt-4" />
            <div className="mt-8 grid grid-cols-[240px_auto] gap-6">
                <LeftColumn profile={profile} />
                <div>
                    <OwnQuests profile={profile} isCreatedByMe={false} />
                    <CompletedQuests
                        profile={profile}
                        isCompletedByMe={false}
                    />
                </div>
            </div>
        </div>
    );
};
