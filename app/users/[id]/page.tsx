import { UserProfilePageComponent } from "@/components/page-components/UserProfile";
import { Profile } from "@/types/user.interface";
import { getMyProfile } from "@/api/user";
import { getUserProfile } from "@/api/user";
import { getCookie } from "@/helpers/getCookie";
import { printToastErrorMessages } from "@/helpers/displayToasts";
import { notFound } from "next/navigation";

const UserProfile = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const token = await getCookie("token");

    let profile: Profile | null = null;

    // that, who requests user profile page, (possibly is admin)
    const getIsReqeusterAdmin = async () => {
        try {
            const profile = await getMyProfile();

            if (!("statusCode" in profile) && profile.isAdmin) {
                return true;
            }

            return false;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    const getUserProfileHandler = async () => {
        try {
            const data = await getUserProfile(id);

            if ("statusCode" in data) {
                if (data.statusCode === 400) {
                    printToastErrorMessages(
                        data.errors.map((err) => err.message),
                    );

                    return null;
                } else if (data.statusCode === 401) {
                    return null;
                }

                return null;
            }
            return { ...data, createdQuests: [], completedQuests: [] };
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    let isAdmin = false;
    if (token) {
        isAdmin = await getIsReqeusterAdmin();
    }

    profile = await getUserProfileHandler();

    console.log("isAdmin", isAdmin);
    console.log("profile", profile);

    if (!profile) {
        notFound();
    }

    /*const getCompletedQuests = async () => {
        const data = await getCompletedQuestsByOwnerId(profile.id);
        
        return data;
    }; */

    /* const getOwnQuests = async () => {
        const data = await getQuestsByOwnerId(
            {
                pageNumber: 0,
                pageSize: 20,
            },
            profile.id,
        );
        console.log(data);

        return data.items;
    }; */

    /* const ownQuests = await getOwnQuests(); */
    /* const completedQuests = await getCompletedQuests(); */

    return (
        <UserProfilePageComponent
            ownQuests={[]}
            completedQuests={[]}
            isEditable={isAdmin}
            profile={profile}
        />
    );
};

export default UserProfile;
