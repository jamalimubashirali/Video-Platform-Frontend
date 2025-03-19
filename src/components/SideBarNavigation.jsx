import React from 'react';
import { Link } from 'react-router-dom';

const SideBarNavigation = () => {
    return (
        <div className="bg-gray-200 w-64 h-screen">
            <ul className="p-4">
                <li className="mb-4">
                    <Link to="/" className="text-blue-500 hover:text-blue-700">
                        Home
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/subscriptions" className="text-blue-500 hover:text-blue-700">
                        Subscriptions
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/channels" className="text-blue-500 hover:text-blue-700">
                        Channels
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/pages" className="text-blue-500 hover:text-blue-700">
                        Pages
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBarNavigation;