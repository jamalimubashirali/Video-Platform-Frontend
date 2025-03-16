import React, { useEffect } from "react";
import likesService from "../services/likes.service";
import Button from "./Button";

const VideoStats = ({ videoViews, videoId }) => {
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    (async () => {
      const likes = await likesService.getVideoLikes(videoId);
      setLikes(likes);
    })();
  });
  const handleLike = async (videoId) => {
    const liked = await likesService.toggleVideoLike(videoId);
  };

  return (
    <div className="flex space-x-2">
      <span>{`${videoViews} views`}</span>
      <span>{`${likes}`}</span>
      <Button onClick={handleLike}>Like</Button>
    </div>
  );
};

export default VideoStats;
