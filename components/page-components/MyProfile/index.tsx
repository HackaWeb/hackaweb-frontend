import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { LeftColumn } from "./LeftColumn";
import { LeftColumnProps } from "./LeftColumn/LeftColumn.props";

export const MyProfilePageComponent = ({ profile }: LeftColumnProps) => {
    return (
        <div>
            <h1>Мій кабінет</h1>
            <ReturnBtn className="mt-4" />
            <div className="mt-8 grid grid-cols-[240px_330px_auto]">
                <LeftColumn profile={profile} />
            </div>
        </div>
    );
};
