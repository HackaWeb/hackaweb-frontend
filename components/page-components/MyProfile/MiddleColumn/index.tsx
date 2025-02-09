"use client";

import { UpdateUserRequest } from "@/api/responses/user.types";
import { MiddleColumnProps } from "./MiddleColumn.props";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";
import { updateUserProfile } from "@/api/user";
import { toast } from "react-toastify";
import { DEFAULT_FIELD_ERROR } from "@/api/responses/common/failure.interface";
import { printToastErrorMessages } from "@/helpers/displayToasts";

export const MiddleColumn = ({ profile }: MiddleColumnProps) => {
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);

    const onSubmit = async () => {
        const formData = new FormData();
        formData.append("firstName", firstName ?? "");
        formData.append("lastName", lastName ?? "");

        const result = await updateName(formData);
        if (result.length === 0) {
            toast.success("Успішно змінено ваші ім'я та прізвище!");
        } else {
            printToastErrorMessages(result.map((res) => res.message));
        }
    };

    const updateName = async (updateForm: UpdateUserRequest) => {
        try {
            const data = await updateUserProfile(updateForm);
            if ("statusCode" in data) {
                if (data.statusCode === 400) {
                    return data.errors;
                } else if (data.statusCode === 401) {
                    return [{ field: "", message: data.message }];
                }
                return [DEFAULT_FIELD_ERROR];
            }
            return [DEFAULT_FIELD_ERROR];
        } catch (error) {
            console.error(error);
            return [DEFAULT_FIELD_ERROR];
        }
    };

    return (
        <div className="">
            <div className="p-4 bg-blackOpacity rounded-md">
                <form action={onSubmit}>
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
                            value={firstName ?? ""}
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
                            value={lastName ?? ""}
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
