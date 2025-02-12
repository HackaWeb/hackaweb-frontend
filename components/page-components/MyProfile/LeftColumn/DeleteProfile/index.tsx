"use client";
import { DEFAULT_FIELD_ERROR } from "@/api/responses/common/failure.interface";
import { deleteUserProfile } from "@/api/user";
import { Button } from "@/components/ui/Button";
import { printToastErrorMessages } from "@/helpers/displayToasts";
import { setCookie } from "@/helpers/setCookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const DeleteProfile = () => {
    const router = useRouter();

    const deleteProfileHandler = async () => {
        try {
            const result = await deleteProfileFetchHandler();

            if (result.length === 0) {
                toast.success("Ваш профіль успішно видалено!");
                setCookie("token", "");
                router.push("/");

                const timeout = setTimeout(() => {
                    router.refresh();
                    clearTimeout(timeout);
                });
            } else {
                printToastErrorMessages(result.map((res) => res.message));
            }
        } catch (error) {
            toast.error(DEFAULT_FIELD_ERROR.message);
        }
    };

    const deleteProfileFetchHandler = async () => {
        try {
            const data = await deleteUserProfile();

            if ("statusCode" in data) {
                return data.errors;
            }
            return [];
        } catch (error) {
            return [DEFAULT_FIELD_ERROR];
        }
    };

    const onDeleteButtonClick = async () => {
        await deleteProfileHandler();
    };

    return (
        <Button
            className="mt-6 w-full"
            color="redBorder"
            onClick={onDeleteButtonClick}
        >
            Видалити акаунт
        </Button>
    );
};
