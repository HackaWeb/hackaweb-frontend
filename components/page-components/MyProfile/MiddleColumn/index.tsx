"use client";

import { MiddleColumnProps } from "./MiddleColumn.props";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";
import { updateUserProfile } from "@/api/user";
import { toast } from "react-toastify";
import { DEFAULT_FIELD_ERROR } from "@/api/responses/common/failure.interface";
import { printToastErrorMessages } from "@/helpers/displayToasts";
import { useRouter } from "next/navigation";

export const MiddleColumn = ({ profile }: MiddleColumnProps) => {
    const router = useRouter();

    const [userData, setUserData] = useState({
        firstName: profile.firstName || "",
        lastName: profile.lastName || "",
    });

    const updateUserDataHandler = async (updateForm: FormData) => {
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

            return [];
        } catch (error) {
            console.error(error);
            return [DEFAULT_FIELD_ERROR];
        }
    };

    const onUpdateProfileSubmit = async () => {
        const formData = new FormData();

        formData.append("firstName", userData.firstName);
        formData.append("lastName", userData.lastName);

        const result = await updateUserDataHandler(formData);

        if (result.length === 0) {
            router.refresh();
            toast.success("Ваші дані успішно оновлено");
        } else {
            printToastErrorMessages(result.map((res) => res.message));
        }
    };

    return (
        <div className="">
            <div className="p-4 bg-blackOpacity rounded-md">
                <form action={onUpdateProfileSubmit}>
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
                            value={userData.firstName}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    firstName: e.target.value,
                                })
                            }
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
                            value={userData.lastName}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    lastName: e.target.value,
                                })
                            }
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
