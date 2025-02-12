import { getCompletedQuestsByOwnerId, getQuestsByOwnerId } from "@/api/quests";
import { DEFAULT_FIELD_ERROR } from "@/api/responses/common/failure.interface";
import { getMyProfile } from "@/api/user";
import { MyProfilePageComponent } from "@/components/page-components/MyProfile";
import { getCookie } from "@/helpers/getCookie";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const MyProfile = async () => {
    const token = await getCookie("token");

    if (!token) {
        redirect("/login");
    }

    const getProfile = async () => {
        try {
            const data = await getMyProfile();
            console.log(data);

            if ("statusCode" in data) {
                redirect("/login");
            } else {
                return data;
            }
        } catch (error) {
            console.error(error);
            redirect("/login");
        }
    };

    const getOwnQuests = async () => {
        try {
            const data = await getQuestsByOwnerId(profile.id);
            return data.quizzes;
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    const getCompletedQuests = async () => {
        try {
            return await getCompletedQuestsByOwnerId();
        } catch (error) {
            console.error(error);
            toast.error(DEFAULT_FIELD_ERROR.message);
            return [];
        }
    };

    const profile = await getProfile();
    if (!profile) {
        redirect("/login");
    }

    const ownQuests = await getOwnQuests();
    const completedQuests = await getCompletedQuests();

    return (
        <MyProfilePageComponent
            profile={profile}
            ownQuests={ownQuests}
            completedQuests={completedQuests}
        />
    );
};

export default MyProfile;
