"use client";

import { useState } from "react";
import { ProfileControlsProps } from "./ProfileControls.props";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FiEdit2 } from "react-icons/fi";

export const ProfileControls = ({
    defaultEmail,
    defaultNickname,
}: ProfileControlsProps) => {
    const [email, setEmail] = useState(defaultEmail);
    const [nickname, setNickname] = useState(defaultNickname);

    return (
        <div className="bg-blackOpacity p-4 rounded-md">
            <div>
                <div>
                    <label htmlFor="email" className="text-gray">
                        Ваша пошта
                    </label>
                    <div className="relative">
                        <Input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ваша пошта..."
                            className="mt-2"
                        />
                        <FiEdit2 className="text-purple absolute right-3 bottom-3 size-5" />
                    </div>
                </div>
                <div className="mt-6">
                    <label htmlFor="nickname" className="text-gray">
                        Ваша нікнейм
                    </label>
                    <div className="relative">
                        <Input
                            type="text"
                            id="nickname"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            placeholder="Ваша нікнейм..."
                            className="mt-2"
                        />
                        <FiEdit2 className="text-purple absolute right-3 bottom-3 size-5" />
                    </div>
                </div>
            </div>
            <Button color="purpleBackground" className="px-16 mt-10 mx-auto mb-4">
                Зберегти
            </Button>
        </div>
    );
};
