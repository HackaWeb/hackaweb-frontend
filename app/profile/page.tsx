import { getCompletedQuestsByOwnerId, getQuestsByOwnerId } from "@/api/quests";
import { getMyProfile } from "@/api/user";
import { MyProfilePageComponent } from "@/components/page-components/MyProfile";
import { getCookie } from "@/helpers/getCookie";
import { redirect } from "next/navigation";

const MyProfile = async () => {
    const token = await getCookie("token");

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

    if (!token) {
        redirect("/login");
    }

    const profile = await getProfile();
    /* const ownQuests = await getOwnQuests(); */
    /* const completedQuests = await getCompletedQuests(); */

    return (
        <MyProfilePageComponent
            profile={profile}
            ownQuests={[]}
            completedQuests={[]}
        />
    );
};

export default MyProfile;
