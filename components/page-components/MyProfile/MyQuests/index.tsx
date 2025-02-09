import UserQuestsDashboard from "../../../common/profile/Quest/Dashboard/User";
import { MyQuestsProps } from "./MyQuests.props";

export const MyQuests = ({ profile }: MyQuestsProps) => {
    return (
        <UserQuestsDashboard
            title="Мої тести"
            quests={profile.createdQuests}
            isActionable={true}
        />
    );
};
