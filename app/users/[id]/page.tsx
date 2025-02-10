import { UserProfilePageComponent } from "@/components/page-components/UserProfile";
import { Profile } from "@/types/user.interface";
import { getProfile } from "@/api/user";
import { getCookie } from "@/helpers/getCookie";
import { printToastErrorMessages } from "@/helpers/displayToasts";
import { notFound } from "next/navigation";

const UserProfile = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    const token = await getCookie("token");

    let profile: Profile | null = null;

    const getOwnProfileData = async () => {
        try {
            const profile = await getProfile();

            if (!("statusCode" in profile) && profile.isAdmin) {
                return true;
            }

            return false;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    const getUserProfileData = async () => {
        try {
            const data = await getProfile(id);

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
        isAdmin = await getOwnProfileData();
    }

    profile = await getUserProfileData();

    console.log("isAdmin", isAdmin);
    console.log("profile", profile);

    if (!profile) {
        notFound();
    }

    return (
        <UserProfilePageComponent id={id} isAdmin={isAdmin} profile={profile} />
    );
};

export default UserProfile;
