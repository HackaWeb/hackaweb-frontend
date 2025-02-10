import React from "react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="mt-10 ml-10">
            <h1>Упс!</h1>
            <h2>Такої сторінки не знайдено</h2>
            <Link href="/">Повернутися на головну...</Link>
        </div>
    );
}
