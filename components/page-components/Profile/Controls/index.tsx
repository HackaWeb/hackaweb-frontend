"use client";

import { Input } from "@/components/ui/Input";
import React, { useState } from "react";
import { ProfileControlsProps } from "./ProfileControls.props";
import { Button } from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import Block from "@/components/ui/Block";

const ProfileControls = ({
    defaultEmail,
    defaultName,
}: ProfileControlsProps) => {
    const [email, setEmail] = useState(defaultEmail);
    const [name, setName] = useState(defaultName);

    return (
        <Block>
            <div className="flex flex-col gap-8">
                <div>
                    <Label htmlFor="email">Ваша пошта</Label>
                    <Input
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="name">Ваш нікнейм</Label>
                    <Input
                        name="name"
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </div>
            <Button color="purpleBlueGradient" className="px-16">
                Зберегти
            </Button>
        </Block>
    );
};

export default ProfileControls;
