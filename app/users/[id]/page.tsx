import { UserProfilePageComponent } from "@/components/page-components/UserProfile";
import { Profile } from "@/types/user.interface";
import { getMyProfile } from "@/api/user";
import { getUserProfile } from "@/api/user";
import { getCookie } from "@/helpers/getCookie";
import { printToastErrorMessages } from "@/helpers/displayToasts";
import { notFound } from "next/navigation";
import { toast } from "react-toastify";

const UserProfile = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const token = await getCookie("token");

    let profile: Profile | null = null;

    // that, who requests user profile page, (possibly is admin)
    const getIsReqeusterAdmin = async () => {
        try {
            const profile = await getMyProfile();
            console.log("My profile:", profile);

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
            console.log(data);

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

    return <UserProfilePageComponent isEditable={isAdmin} profile={profile} />;
};

export default UserProfile;
