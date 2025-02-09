"use client";

import { MiddleColumnProps } from "./MiddleColumn.props";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";

export const MiddleColumn = ({ profile }: MiddleColumnProps) => {
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);

    return (
        <div className="">
            <div className="p-4 bg-blackOpacity rounded-md">
                <form action="">
                    <div>
                        <label htmlFor="email" className="text-gray">
                            Ваша пошта
                        </label>
                        <Input
                            id="email"
                            placeholder={profile.email}
                            disabled
                            className="mt-2"
                            type="email"
                        />
                    </div>
                    <div className="mt-6">
                        <label htmlFor="firstName" className="text-gray">
                            Ваше імʼя
                        </label>
                        <Input
                            type="text"
                            id="firstName"
                            placeholder="Ваше імʼя..."
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-6">
                        <label htmlFor="lastName" className="text-gray">
                            Ваше прізвище
                        </label>
                        <Input
                            type="text"
                            id="lastName"
                            placeholder="Ваше прізвище..."
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="mt-2"
                        />
                    </div>
                    <Button
                        type="submit"
                        color="purpleBackground"
                        className="mt-6 mx-auto mb-2"
                    >
                        Зберігти зміни
                    </Button>
                </form>
            </div>
        </div>
    );
};
