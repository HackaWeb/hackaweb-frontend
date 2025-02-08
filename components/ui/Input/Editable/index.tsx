import React, { useRef, useState, useEffect, useCallback } from "react";
import { FiEdit2 } from "react-icons/fi";
import { Input } from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { cn } from "@/helpers/cn";
import { EditableInputProps } from "./EditableInput.props";
import { onOutsideClick } from "@/helpers/onOutsideClick";

const EditableInput = ({
    name,
    label,
    type,
    setValue,
    value,
    ...props
}: EditableInputProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const ref = useRef<HTMLInputElement | null>(null);

    // Memoize the endEditing function to prevent unnecessary re-renders
    const endEditing = useCallback(() => {
        if (ref.current) {
            setValue(ref.current.value);
        }
    }, [setValue]);

    onOutsideClick(ref, endEditing);

    return (
        <div>
            <Label htmlFor={name}>{label}</Label>
            <div className="flex gap-2 bg-blackOpacity items-center px-2">
                <Input
                    name={name}
                    className={cn(!isEditing && "opacity-50")}
                    type={type}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={() => setIsEditing(false)}
                    disabled={!isEditing}
                    ref={ref}
                    {...props}
                />
                {!isEditing && (
                    <FiEdit2
                        onClick={() => setIsEditing(true)}
                        className="size-4 text-purple"
                    />
                )}
            </div>
        </div>
    );
};

export default EditableInput;
