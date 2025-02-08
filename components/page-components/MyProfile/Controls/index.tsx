"use client";
import React, { useState } from "react";
import { ProfileControlsProps } from "./ProfileControls.props";
import { Button } from "@/components/ui/Button";
import Block from "@/components/ui/Block";
import EditableInput from "@/components/ui/Input/Editable";

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
                    <EditableInput
                        label="Ваша пошта"
                        name="email"
                        value={email}
                        setValue={(value) => setEmail(value)}
                    />
                </div>
                <div>
                    <EditableInput
                        label="Ваш нікнейм"
                        name="name"
                        value={name}
                        setValue={(value) => setName(value)}
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
