"use client";

import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { FaGoogle } from "react-icons/fa6";
import { motion } from "framer-motion";
import { slideFromBottomAnimation } from "@/helpers/animation";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    return (
        <div className="flex place-content-center place-items-center h-full overflow-hidden">
            <motion.div
                key={pathname}
                {...slideFromBottomAnimation}
                className="container p-4 sm:p-8 bg-blackOpacity rounded-lg flex flex-col max-w-xl"
            >
                <div>
                    <ReturnBtn />
                </div>
                {children}
                <div className="flex place-items-center place-content-center mt-3">
                    <button className="py-2 px-12 flex gap-4 place-items-center bg-blackOpacity-dark rounded-md hover:opacity-90 duration-200">
                        <figure className="bg-white p-1.5 rounded-md">
                            <FaGoogle size={20} className="text-purple" />
                        </figure>
                        <span className="text-lg">Google</span>
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default AuthLayout;
