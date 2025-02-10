import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Textarea";
import { useState } from "react";
import { IoStar } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

export const MakeReview = () => {
    const [rating, setRating] = useState<number>(0);
    const [review, setReview] = useState<string>("");

    const handleStarClick = (starIndex: number) => {
        setRating(starIndex + 1);
    };

    return (
        <div className="bg-blackOpacity p-6 rounded-lg mb-4">
            <div className="text-xl font-bold mb-4">Оцініть цей квест</div>
            <div className="flex">
                {[...Array(5)].map((_, index) => (
                    <IoStar
                        key={index}
                        onClick={() => handleStarClick(index)}
                        className={`cursor-pointer ${
                            index < rating ? "text-yellow-500" : "text-gray-400"
                        } text-2xl ml-[6px] first:ml-0`}
                    />
                ))}
            </div>
            <Textarea
                className="mt-6"
                placeholder="Текст відгуку..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
            />
            <Button color="purpleBackground" className="mt-6">
                <IoIosSend className="size-6" />
                <span>Надіслати</span>
            </Button>
        </div>
    );
};
