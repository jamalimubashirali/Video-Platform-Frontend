import React from 'react'
import { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import videoService from '../services/video.service'

const VideoCardListGrid = ({userId}) => {
    const [videos , setVideos]  = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    if(userId) {
        useEffect(() => {
            ;(async () => {
                try {
                    const videos = await videoService.getUserVideos(userId);
                    if(videos) {
                        setVideos(videos);
                        setLoading(false);
                    }
                } catch (error) {
                    setError(error);
                }
            })();
        });    
    } else {
        useEffect(() => {
            ;(async () => {
                try {
                    const videos = await videoService.getAllVideos();
                    if(videos) {
                        setVideos(videos);
                        setLoading(false);
                    }
                } catch (error) {
                    setError(error);
                }
            })();
        });
    }
    if(loading) return <h1>Loading...</h1>;

  return error ? (
    <div>
        <h2>An Error Occured During the fetch Process</h2>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map(video => (
            <VideoCard key={video._id} video={video} />
        ))}
    </div>
  );
}

export default VideoCardListGrid;

