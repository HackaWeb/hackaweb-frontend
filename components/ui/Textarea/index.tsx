import { cn } from "@/helpers/cn";
import { TextareaProps } from "./Textarea.props";

export const Textarea = ({ className, ...rest }: TextareaProps) => {
    return (
        <textarea
            className={cn(
                "w-full p-3 text-base font-medium bg-gray-light rounded-md min-h-40 border-2 border-gray-300",
                className,
            )}
            {...rest}
        />
    );
};
