import React, { useId } from "react";

const InputField = React.forwardRef(function Input(
    { label, type = "text", className, ...props },
    ref
) {
    const id = useId();
    return (
        <div>
            {label && (
                <label htmlFor={id} className="text-sm font-medium text-gray-950">
                    {label}
                </label>
            )}
            <input
                type={type}
                ref={ref}
                {...props}
                id={id}
                className={`ml-2 mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
            />
        </div>
    );
});

export default InputField;
