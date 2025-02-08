"use client";

import Image from "next/image";
import { RenderRating } from "@/helpers/RenderRating";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";

interface Review {
    id: number;
    user: {
        id: string;
        name: string;
        avatar: string;
    };
    date: string;
    rating: number;
    text: string;
}

interface ReviewsProps {
    reviews: Review[];
}

export const Reviews = ({ reviews }: ReviewsProps) => {
    return (
        <div className="bg-blackOpacity p-4 rounded-lg mt-8">
            <h2 className="text-white text-lg font-semibold mb-4">
                Відгуки ({reviews.length})
            </h2>
            <div className="flex flex-col gap-4">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="bg-blackOpacity-dark p-4 rounded-lg flex gap-4"
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-md border border-purple flex items-center justify-center">
                                {review.user.avatar ? (
                                    <Image
                                        src={review.user.avatar}
                                        alt="Avatar"
                                        width={24}
                                        height={24}
                                    />
                                ) : (
                                    <AiOutlineUser className="text-purple size-6" />
                                )}
                            </div>
                        </div>
                        <div className="flex-1">
                            <Link
                                className="font-semibold"
                                href={`/users/${review.user.id}`}
                            >
                                {review.user.name}
                            </Link>
                            <div className="text-gray-light text-sm">
                                {review.date}
                            </div>
                            <RenderRating
                                rating={review.rating}
                                className="mt-2"
                            />
                        </div>
                        <div className="text-gray-light">{review.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
