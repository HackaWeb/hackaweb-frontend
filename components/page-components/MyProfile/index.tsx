import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { LeftColumn } from "./LeftColumn";
import { MiddleColumn } from "./MiddleColumn";
import { MyProfileProps } from "./MyProfile.props";
import { CompletedQuests } from "@/components/common/tables/CompletedQuests";
import { OwnQuests } from "@/components/common/tables/OwnQuests";

export const MyProfilePageComponent = ({ profile }: MyProfileProps) => {
    return (
        <div>
            <h1>Мій кабінет</h1>
            <ReturnBtn className="mt-4" />
            <div className="mt-8 grid grid-cols-[240px_330px_auto] gap-6">
                <LeftColumn profile={profile} />
                {/* <MiddleColumn profile={profile} /> */}
                {/* <div>
                    <OwnQuests profile={profile} isCreatedByMe={true} />
                    <CompletedQuests profile={profile} isCompletedByMe={true} />
                </div> */}
            </div>
        </div>
    );
};
