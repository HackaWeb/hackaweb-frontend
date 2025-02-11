import { getQuestsByOwnerId } from "@/api/quests";
import { getMyProfile } from "@/api/user";
import { MyProfilePageComponent } from "@/components/page-components/MyProfile";
import { getCookie } from "@/helpers/getCookie";
import { Profile } from "@/types/user.interface";
import { redirect } from "next/navigation";

const MyProfile = async () => {
    const token = await getCookie("token");
    let profile: Profile | null = null;

    if (!token) {
        redirect("/login");
    } else {
        try {
            const data = await getMyProfile();

            if ("statusCode" in data) {
                redirect("/login");
            } else {
                profile = data;
            }
        } catch (error) {
            console.error(error);
            redirect("/login");
        }

        try {
            const data = await getQuestsByOwnerId({
                pageNumber: 1,
                pageSize: 20,
            });
            console.log(data);

            /* if ("statusCode" in data) {
                console.log(data);
            } else {
                console.log(data);
            } */
        } catch (error) {
            console.log(error);
        }
    }

    return <MyProfilePageComponent profile={profile} />;
};

export default MyProfile;
