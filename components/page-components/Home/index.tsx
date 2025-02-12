"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { SelectOption } from "@/types/selectOption.interface";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { HomePageComponentProps } from "./Home.props";
import { Quest } from "./Quest";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { toggleModal } from "@/store/slices/modals/modals";
import { getQuests } from "@/api/quests";
import { SortType } from "@/types/quest.interface";
import { motion, Variants } from "framer-motion";

const sortOptions: SelectOption[] = [
    { title: "Рейтингом тесту", value: "testRating" },
    { title: "Кількістю пройдених разів", value: "completedQuantity" },
    { title: "За алфавітом", value: "alphabet" },
    { title: "Рейтингом автора", value: "authorRating" },
];

const sortOptionActionMap: Record<string, SortType> = {
    testRating: SortType.Rating,
    completedQuantity: SortType.NumberOfPasses,
    alphabet: SortType.Alphabet,
    authorRating: SortType.AuthorRating,
};

const bounceAnimation: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 200, damping: 10 },
    },
};
export const HomePageComponent = ({ serverQuests }: HomePageComponentProps) => {
    const dispatch = useAppDispatch();

    const [sortOption, setSortOption] = useState<SelectOption | null>(null);
    const [searchQuest, setSearchQuest] = useState<string>("");
    const [quests, setQuests] = useState(serverQuests);

    const processQuestsHandler = async () => {
        const sortType = sortOption
            ? sortOptionActionMap[sortOption.value]
            : undefined;
        const titleFilter = searchQuest.length >= 3 ? searchQuest : undefined;

        try {
            const response = await getQuests({ sortType, titleFilter });

            if (response.quizzes) {
                setQuests(response.quizzes);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const clickHandler = () => {
        dispatch(toggleModal("QuestCreation"));
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            processQuestsHandler();
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [sortOption, searchQuest]);

    console.log(quests);

    return (
        <>
            <h1 className="mt-12">Квести</h1>
            <Link href="#" className="mt-3 duration-0">
                <Button
                    color="purpleBorder"
                    className="mt-3"
                    /* onClick={clickHandler} */
                >
                    <span>Створити свій квест</span>
                    <IoCreateOutline className="size-6" />
                </Button>
            </Link>
            <div className="flex gap-4 mt-10 flex-col xsm:flex-row">
                <Input
                    placeholder="Пошук за назвою..."
                    className="xsm:max-w-[300px] max-w-none"
                    value={searchQuest}
                    onChange={(e) => setSearchQuest(e.target.value)}
                />
                <Select
                    options={sortOptions}
                    activeOption={sortOption}
                    setActiveOption={setSortOption}
                    id="sort-select"
                    placeholder="Сортувати за..."
                    className="xsm:max-w-[300px] max-w-none"
                />
            </div>
            <div className="mt-4 text-gray">
                <span className="text-white font-bold">{quests.length}</span>{" "}
                результатів знайдено
            </div>
            {quests.length ? (
                <>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 mt-6">
                        {quests.map((quest, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate="visible"
                                variants={bounceAnimation}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Quest key={index} quest={quest} />
                            </motion.div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="text-gray text-sm">Квестів не знайдено</div>
            )}
        </>
    );
};
