import { MdJoinRight } from "react-icons/md";

export const JoinWithCode = () => {
    return (
        <button className="bg-blackOpacity-dark p-4 px-8 rounded-lg absolute -rotate-[90deg] -right-20 top-40 flex items-center gap-2 hover:text-purple duration-300">
            <MdJoinRight className="size-6 text-purple" />
            <span>Join with code</span>
        </button>
    );
};
