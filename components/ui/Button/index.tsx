import { cn } from "@/helpers/cn";
import { ButtonProps } from "./Button.props";

export const Button = ({
    color,
    className,
    children,
    ...rest
}: ButtonProps) => {
    const colorStyles = {
        purpleBackground: "bg-purple text-white hover:bg-purple-dark",
        purpleBorder: "border-2 border-purple hover:bg-purple-light",
        yellowBorder: "border-2 border-yellow hover:bg-yellow-light",
        redBorder: "border-2 border-red hover:bg-red-light",
    };

    return (
        <button
            className={cn(
                "p-3 px-4 flex items-center justify-center rounded-lg w-full font-semibold",
                color && colorStyles[color],
                className,
            )}
            {...rest}
        >
            {children}
        </button>
    );
};
