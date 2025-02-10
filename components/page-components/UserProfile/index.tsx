"use client";
import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { UserProfileProps } from "./UserProfile.props";
import { LeftColumn } from "./LeftColumn";
import { CompletedQuests } from "@/components/common/tables/CompletedQuests";
import { OwnQuests } from "@/components/common/tables/OwnQuests";
import { getProfile } from "@/api/user";
import { printToastErrorMessages } from "@/helpers/displayToasts";
import { toast } from "react-toastify";
import { DEFAULT_FIELD_ERROR } from "@/api/responses/common/failure.interface";
import { useEffect, useState } from "react";
import { Profile } from "@/types/user.interface";
import { MiddleColumn } from "./MiddleColumn";

export const UserProfilePageComponent = ({ id, isAdmin }: UserProfileProps) => {
    const [profile, setProfile] = useState<Profile | null>();
    useEffect(() => {
        const getProfileData = async () => {
            try {
                const data = await getProfile(id);
                if ("statusCode" in data) {
                    if (data.statusCode === 400) {
                        printToastErrorMessages(
                            data.errors.map((err) => err.message),
                        );
                        return;
                    } else if (data.statusCode === 401) {
                        return;
                    }
                    return null;
                }
                setProfile({ ...data, createdQuests: [], completedQuests: [] });
            } catch (error) {
                console.error(error);
                toast.error(DEFAULT_FIELD_ERROR.message);
                return null;
            }
        };
        getProfileData();
    }, []);
    return (
        profile && (
            <div>
                <h1>
                    Профіль користувача {profile.firstName} {profile.lastName}
                </h1>
                <ReturnBtn className="mt-4" />
                <div className="mt-8 grid grid-cols-[240px_auto] gap-6">
                    <LeftColumn profile={profile} id={id} />
                    {isAdmin && <MiddleColumn id={id} profile={profile} />}
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
