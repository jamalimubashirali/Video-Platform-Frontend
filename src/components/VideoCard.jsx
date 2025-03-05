import React from "react";

const VideoCard = ({ video }) => {
    return (
        <div className="w-full rounded-md">
            <div className="relative">
                <img
                    className="w-full h-48 object-cover"
                    src={video.thumbnail}
                    alt={video.title}
                />
            </div>
            <div className="bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white rounded-tr-lg">
                    <p className="text-sm">{video.title}</p>
            </div>
            <div className="p-2">
                <p className="text-sm text-gray-500">{video.description}</p>
                <div className="flex justify-between mt-2">
                    <p className="text-sm text-gray-500">{video.views} views</p>
                    <p className="text-sm text-gray-500">{video.date}</p>
                </div>
            </div>
        </div>
    );
}