import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface EditableInputProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    name: string;
    label: string;
    value: string;
    setValue: (value: string) => void;
}
