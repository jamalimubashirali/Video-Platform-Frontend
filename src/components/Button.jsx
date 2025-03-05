import React from "react";

const Button = React.forwardRef(function Button(
    { children, className, bgColor = "bg-blue-500", icon, textColor = "text-white", ...props },
    ref
) {
    return (
        <button
            ref={ref}
            {...props}
            className={`px-4 gap-2 py-2 rounded-md ${bgColor} ${textColor} ${className}`}
        >
            {icon}
            {children}
        </button>
    );
});