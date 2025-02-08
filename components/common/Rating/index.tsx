"use client";
import React from "react";
import { RatingProps } from "./Rating.props";
import { MdStar } from "react-icons/md";
import { cn } from "@/helpers/cn";

const Rating = ({ rating, className, ...rest }: RatingProps) => {
    const approximateRating = Math.floor(rating);
    return (
        <div className={cn("flex gap-0.5", className)} {...rest}>
            {Array(5)
                .fill(0)
                .map((_, index) => (
                    <span key={index}>
                        <MdStar
                            className="w-4 h-4"
                            fill={
                                index < approximateRating ? "purple" : "white"
                            }
                        />
                    </span>
                ))}
        </div>
    );
};

export default Rating;
