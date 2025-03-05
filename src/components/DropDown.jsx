import React, { useId } from "react";

const DropDown = ({ options, className, name, ...props }) => {
    const id = useId();
    return (
        <div className="w-full">
            <select
                name={name}
                id={id}
                className={`w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropDown;