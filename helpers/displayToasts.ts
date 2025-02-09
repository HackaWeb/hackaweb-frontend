import { toast } from "react-toastify";

export const displayToasts = (toasts: string[]) => {
    if (toasts.length === 0) {
        toast.success("Вас успішно зареєстровано!");
    } else {
        for (let errorToastText of toasts) {
            toast.error(errorToastText);
        }
    }
};
