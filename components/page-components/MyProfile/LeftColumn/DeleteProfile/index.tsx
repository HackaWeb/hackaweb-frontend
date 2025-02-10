"use client";

import { DEFAULT_FIELD_ERROR } from "@/api/responses/common/failure.interface";
import { deleteUserProfile } from "@/api/user";
import { Button } from "@/components/ui/Button";
import { printToastErrorMessages } from "@/helpers/displayToasts";
import { setCookie } from "@/helpers/setCookie";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const DeleteProfile = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const deleteProfileFetchHandler = async () => {
        try {
            const data = await deleteUserProfile();

            if ("statusCode" in data && data.statusCode !== 200) {
                return data.errors;
            }
            return [];
        } catch (error) {
            return [DEFAULT_FIELD_ERROR];
        }
    };

    const deletingProfileCallback = async () => {
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

    const onDeleteButtonClick = () => {
        dispatch(
            setDeletingInfo({
                title: "Ви впевнені, що хочете видалити свій профіль?",
                callback: deletingProfileCallback,
            }),
        );
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
