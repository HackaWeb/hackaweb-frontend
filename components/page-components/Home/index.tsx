"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { SelectOption } from "@/types/selectOption.interface";
import Link from "next/link";
import { useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { HomePageComponentProps } from "./Home.props";
import { Quest } from "./Quest";

const sortOptions: SelectOption[] = [
    { title: "Рейтингом тесту", value: "testRating" },
    { title: "Кількістю пройдених разів", value: "completedQuantity" },
    { title: "За алфавітом", value: "alphabet" },
    { title: "Рейтингом автора", value: "authorRating" },
];

export const HomePageComponent = ({ serverQuests }: HomePageComponentProps) => {
    const [sortOption, setSortOption] = useState<SelectOption | null>(null);
    const [searchQuest, setSearchQuest] = useState<string>("");
    const [quests, setQuests] = useState(serverQuests);

    return (
        <>
            <h1>Квести</h1>
            <Link href="#" className="mt-3 duration-0">
                <Button color="purpleBorder" className="mt-3">
                    <span>Створити свій квест</span>
                    <IoCreateOutline className="size-6" />
                </Button>
            </Link>
            <div className="flex gap-4 mt-10">
                <Input
                    placeholder="Пошук за назвою..."
                    className="max-w-[300px]"
                    value={searchQuest}
                    onChange={(e) => setSearchQuest(e.target.value)}
                />
                <Select
                    options={sortOptions}
                    activeOption={sortOption}
                    setActiveOption={setSortOption}
                    id="sort-select"
                    placeholder="Сортувати за..."
                    className="max-w-[300px]"
                />
            </div>
            <div className="mt-4 text-gray">
                <span className="text-white font-bold">{quests.length}</span>{" "}
                результатів знайдено
            </div>
            <div className="grid grid-cols-5 gap-7 mt-6">
                {quests.length ? (
                    <>
                        {quests.map((quest) => (
                            <Quest key={quest.id} quest={quest} />
                        ))}
                    </>
                ) : (
                    <div className="text-gray text-sm">Квестів не знайдено</div>
                )}
            </div>
        </>
    );
};
