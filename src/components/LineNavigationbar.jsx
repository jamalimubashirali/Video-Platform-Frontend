import React, { useState } from 'react';

const LineNavigationbar = ({ linkList = ["Home", "About"] }) => {
    const [activeLink, setActiveLink] = useState(0);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    return (
        <div className="flex flex-row items-start space-x-4">
            {linkList.map((link, index) => (
                <div
                    key={index}
                    className={`py-2 ${activeLink === index ? "border-b-3 border-b-gray-900" : ""} cursor-pointer
                    hover:border-b-3 hover:border-gray-900`}
                    onClick={() => handleLinkClick(index)}
                >
                    <p className="text-gray-800 text-lg font-medium">{link}</p>
                </div>
            ))}
        </div>
    );
};

export default LineNavigationbar;