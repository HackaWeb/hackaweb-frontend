'use client';

import { DEFAULT_FIELD_ERROR } from "@/api/responses/common/failure.interface";
import { deleteUserProfile } from "@/api/user";
import { Button } from "@/components/ui/Button";
import { printToastErrorMessages } from "@/helpers/displayToasts";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { DeleteProps } from "./DeleteAccount.props";

export const DeleteProfile = ({ profile }: DeleteProps) => {
    const router = useRouter();

    const deleteUserProfileHandler = async () => {
        try {
            const data = await deleteUserProfile(profile.id);

            if ("statusCode" in data && data.statusCode !== 200) {
                return data.errors;
            }

            return [];
        } catch (error) {
            return [DEFAULT_FIELD_ERROR];
        }
    };

    const onProfileDelete = async () => {
        try {
            const result = await deleteUserProfileHandler();

            if (result.length === 0) {
                toast.success(
                    `Профіль користувача ${profile.firstName} ${profile.lastName} успішно видалено!`,
                );
                router.back();
            } else {
                printToastErrorMessages(result.map((res) => res.message));
            }
        } catch (error) {
            toast.error(DEFAULT_FIELD_ERROR.message);
        }
    };

    return (
        <Button
            className="mt-6 w-full"
            color="redBorder"
            onClick={onProfileDelete}
        >
            Видалити акаунт
        </Button>
    );
};
