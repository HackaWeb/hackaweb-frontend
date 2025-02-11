import { getCompletedQuestsByOwnerId, getQuestsByOwnerId } from "@/api/quests";
import { getMyProfile } from "@/api/user";
import { MyProfilePageComponent } from "@/components/page-components/MyProfile";
import { getCookie } from "@/helpers/getCookie";
import { Quest } from "@/types/quest.interface";
import { Profile } from "@/types/user.interface";
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

    const getCompletedQuests = async () => {
        /* try {
            const res = fetch(
                `https://hackawebquiz.ashycoast-bbbe20af.westus2.azurecontainerapps.io/api/quests/completed/${"3577b43d-8d91-4cd3-9c4c-280c38490d2a"}`,
                {},
            )
                .then((res) => console.log(res))
                .then((data) => {
                    console.log(data);
                });
        } catch (error) {
            console.error(error);
        } */
        try {
            const res = await fetch(
                `https://hackawebquiz.ashycoast-bbbe20af.westus2.azurecontainerapps.io/api/quiz/completed/3577b43d-8d91-4cd3-9c4c-280c38490d2a`,
            );
            console.log(res);
        } catch (er) {}
        /* const data = await getCompletedQuestsByOwnerId(profile.id);
        console.log(data);
        
        return data; */
    };
    getCompletedQuests();

    const getOwnQuests = async () => {
        try {
            const data = await getQuestsByOwnerId(profile.id);
            console.log(data);

            /* return data.items; */
        } catch (error) {
            console.error(error);
        }
    };

    if (!token) {
        redirect("/login");
    }

    const profile = await getProfile();
    const ownQuests = await getOwnQuests();
    const completedQuests = await getCompletedQuests();

    return (
        <MyProfilePageComponent
            profile={profile}
            ownQuests={[]}
            completedQuests={[]}
        />
    );
};

export default MyProfile;
