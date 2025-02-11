import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { LeftColumn } from "./LeftColumn";
import { MiddleColumn } from "./MiddleColumn";
import { MyProfileProps } from "./MyProfile.props";
import { CompletedQuests } from "@/components/common/tables/CompletedQuests";
import { OwnQuests } from "@/components/common/tables/OwnQuests";

export const MyProfilePageComponent = ({
    profile,
    completedQuests,
    ownQuests,
}: MyProfileProps) => {
    return (
        <div className="mt-8 ml-8 md:ml-0">
            <h1>Мій кабінет</h1>
            <ReturnBtn className="mt-4" />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-[240px_auto] 2xl:grid-cols-[240px_330px_auto] gap-6 items-start">
                <LeftColumn
                    profile={profile}
                    completedQuests={completedQuests}
                    ownQuests={ownQuests}
                />
                <MiddleColumn profile={profile} />
                <div className="grid-cols-1 grid items-start -col-start-3 -col-end-1 2xl:col-start-auto 2xl:col-end-auto">
                    <OwnQuests
                        ownQuests={ownQuests}
                        profile={profile}
                        isCreatedByMe={true}
                    />
                    <CompletedQuests
                        completedQuests={completedQuests}
                        profile={profile}
                        isCompletedByMe={true}
                    />
                </div>
            </div>
        </div>
    );
};
