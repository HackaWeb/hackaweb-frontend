import React from "react";
import { QuestEntryProps } from "./Entry.props";
import Image from "next/image";
import Rating from "@/components/common/Rating";
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

const QuestEntry = ({ quest }: QuestEntryProps) => {
    // if authorized
    return (
        <>
            <p>{quest.title}</p>
            <Image src={quest.imageUrl} alt="test" />
            <p>{quest.timeLimit} хв.</p>
            <p>{quest.timesPlayed}</p>
            <Rating rating={quest.rating} />
            <p>10</p>
            <div>
                <FaPencil />
                <FaRegTrashAlt />
            </div>
        </>
    );
};

export default QuestEntry;
