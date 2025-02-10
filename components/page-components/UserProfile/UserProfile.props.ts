import { Profile } from "@/types/user.interface";

export interface UserProfileProps {
    id: string;
    isAdmin: boolean;
    profile: Profile;
}
