"use client";

import Image from "next/image";
import { RenderRating } from "@/helpers/RenderRating";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { ReviewsProps } from "./Reviews.props";

export const Reviews = ({ quest }: ReviewsProps) => {
    return (
        <div className="bg-blackOpacity p-4 rounded-lg mt-8">
            <h2 className="text-white text-lg font-semibold mb-4">
                Відгуки ({quest.reviews.length})
            </h2>
            <div className="flex flex-col gap-4">
                {quest.reviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-blackOpacity-dark p-4 rounded-lg flex flex-col sm:flex-row justify-between gap-4"
                    >
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-md border border-purple flex items-center justify-center">
                                    {review.author.avatar ? (
                                        <Image
                                            src={review.author.avatar}
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
                                    href={`/users/${review.author.id}`}
                                >
                                    {review.author.firstName +
                                        " " +
                                        review.author.lastName}
                                </Link>
                                <div className="text-gray-light text-sm">
                                    {review.createdAt}
                                </div>
                                <RenderRating
                                    rating={review.rating}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="text-gray-light">{review.comment}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
