import React from "react";
import { LabelProps } from "./Label.props";

const Label = ({ children, ...rest }: LabelProps) => {
    return (
        <label className="text-gray" {...rest}>
            {children}
        </label>
    );
};

export default Label;
