"use client";

import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { AsideProps } from "./Aside.props";
import { usePathname } from "next/navigation";

interface LinkItem {
    title: string;
    link: string;
}

export const Aside = ({ isAuthorized }: AsideProps) => {
    const links: LinkItem[] = [
        {
            title: "Квести",
            link: "/",
        },
        {
            title: "Створити квест",
            link: isAuthorized ? "/create-quest" : "/login",
        },
        {
            title: "Мій кабінет",
            link: isAuthorized ? "/profile" : "/login",
        },
        {
            title: "Я адміністратор",
            link: "/login",
        },
    ];

    const pathname = usePathname();

    return (
        <aside className="w-full min-h-[100vh] h-full bg-blackOpacity-dark">
            <div className="mt-10">
                <Link href="/" className="mx-4 text-white text-2xl">
                    КВЕСТ АПП
                </Link>
                <div className="flex mt-8 mx-4 items-center gap-4 bg-blackOpacity p-3">
                    <div className="p-3 border-purple border-2 rounded-md">
                        <AiOutlineUser className="text-purple size-6" />
                    </div>
                    <div className="flex items-center gap-2">
                        <Link
                            className="text-yellow hover:text-yellow-light"
                            href="/login"
                        >
                            Увійти
                        </Link>
                        <div className="w-[1px] h-8 bg-gray-dark"></div>
                        <Link href="/register">Реєстрація</Link>
                    </div>
                </div>
                <nav className="mt-8 text-lg">
                    <ul>
                        {links.map((link, index) => (
                            <li
                                className={
                                    "relative flex items-center mt-5 transition-all"
                                }
                                key={index}
                            >
                                {pathname === link.link && link.link !== "/login" && (
                                    <div className="absolute left-0 flex items-center">
                                        <div className="w-[4px] h-10 bg-purple"></div>
                                        <div className="w-4 h-6 bg-purple blur-md"></div>
                                    </div>
                                )}
                                <Link
                                    href={link.link}
                                    className="ml-6 text-white"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
};
