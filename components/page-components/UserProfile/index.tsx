import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { UserProfileProps } from "./UserProfile.props";
import { LeftColumn } from "./LeftColumn";
/* import { LeftColumn } from "./LeftColumn";
import { LeftColumnProps } from "./LeftColumn/LeftColumn.props";
import { MiddleColumn } from "./MiddleColumn";
import { MyQuests } from "./MyQuests";
import { CompletedQuests } from "./CompletedQuests"; */

export const UserProfilePageComponent = ({ profile }: UserProfileProps) => {
    return (
        <div>
            <h1>Профіль користувача {profile.nickname}</h1>
            <ReturnBtn className="mt-4" />
            <div className="mt-8 grid grid-cols-[240px_auto] gap-6">
                <LeftColumn profile={profile} />
                <div>
                    {/* <MyQuests profile={profile} />
                    <CompletedQuests profile={profile} /> */}
                </div>
            </div>
        </div>
    );
};
