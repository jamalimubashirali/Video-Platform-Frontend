import React , {useState , useEffect} from 'react'
import videoService from '../services/video.service';
import { useSelector } from 'react-redux';
import {VideoCard} from '../components';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
   const [videos , setVideos]  = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const navigate  = useNavigate();
    useEffect(() => {
        ;(async () => {
            try {
                const videos = await videoService.getUserVideos();
                if(videos) {
                    console.log(videos);
                    setVideos(videos.data);
                    setLoading(false);
                }
            } catch (error) {
                setError(error);
            }
        })();
    });


    if(loading) return <h1>Loading...</h1>;

  return error ? (
    <div>
        <h2>An Error Occured During the fetch Process</h2>
    </div>
  ) : (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videos.map((video) => (
                <VideoCard key={video._id} video={video} />
            ))}
        </div>
    </div>
  );
}

export default HomePage;
