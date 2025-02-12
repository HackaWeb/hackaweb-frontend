import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { ReactNode } from "react";
import { FaGoogle } from "react-icons/fa6";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex place-content-center place-items-center h-full">
            <div className="container p-4 sm:p-8 bg-blackOpacity rounded-lg flex flex-col max-w-lg">
                <div>
                    <ReturnBtn />
                </div>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
