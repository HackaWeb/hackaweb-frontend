"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { SelectOption } from "@/types/selectOption.interface";
import Link from "next/link";
import { useState } from "react";
import { IoCreateOutline } from "react-icons/io5";

const sortOptions: SelectOption[] = [
    { title: "Рейтингом тесту", value: "testRating" },
    { title: "Кількістю пройдених разів", value: "completedQuantity" },
    { title: "За алфавітом", value: "alphabet" },
    { title: "Рейтингом автора", value: "authorRating" },
];

export const HomePageComponent = () => {
    const [sortOption, setSortOption] = useState<SelectOption | null>(null);

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
        </>
    );
};
