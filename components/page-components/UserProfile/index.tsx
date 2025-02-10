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
}: UserProfileProps) => {
    return (
        profile && (
            <div>
                <h1>
                    Профіль користувача {profile.firstName} {profile.lastName}
                </h1>
                <ReturnBtn className="mt-4" />
                <div
                    className={cn(
                        "mt-8 grid gap-6",
                        isEditable
                            ? "grid grid-cols-[240px_330px_auto]"
                            : "grid-cols-[240px_auto]",
                    )}
                >
                    <LeftColumn profile={profile} isEditable={isEditable} />
                    {isEditable && <MiddleColumn profile={profile} />}
                    <div>
                        <OwnQuests profile={profile} isCreatedByMe={false} />
                        <CompletedQuests
                            profile={profile}
                            isCompletedByMe={false}
                        />
                    </div>
                </div>
            </div>
        )
    );
};
