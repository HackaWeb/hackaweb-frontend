import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { UserProfileProps } from "./UserProfile.props";
import { LeftColumn } from "./LeftColumn";
import { CompletedQuests } from "@/components/common/tables/CompletedQuests";
import { OwnQuests } from "@/components/common/tables/OwnQuests";
import { MiddleColumn } from "./MiddleColumn";
import { cn } from "@/helpers/cn";

export const UserProfilePageComponent = ({
    isEditable,
    profile,
    ownQuests,
    completedQuests,
}: UserProfileProps) => {
    return (
        profile && (
            <div className="mt-8">
                <h1>
                    Профіль користувача {profile.firstName} {profile.lastName}
                </h1>
                <ReturnBtn className="mt-4" />
                <div
                    className={cn(
                        "mt-8 grid gap-6 grid-cols-1",
                        isEditable
                            ? "sm:grid-cols-[240px_auto] 2xl:grid-cols-[240px_330px_auto]"
                            : "grid-cols-1 xl:grid-cols-[240px_auto]",
                    )}
                >
                    <LeftColumn
                        profile={profile}
                        isEditable={isEditable}
                        completedQuests={completedQuests}
                        ownQuests={ownQuests}
                    />
                    {isEditable && <MiddleColumn profile={profile} />}
                    <div>
                        <OwnQuests
                            profile={profile}
                            ownQuests={ownQuests}
                            isCreatedByMe={false}
                        />
                        <CompletedQuests
                            profile={profile}
                            isCompletedByMe={false}
                            completedQuests={completedQuests}
                        />
                    </div>
                </div>
            </div>
        )
    );
};
