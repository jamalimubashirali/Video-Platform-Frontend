import React from 'react'

const VerticalVideoList = ({category}) => {
    const [videos , setVideos]  = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        ;(async () => {
            try {
                const videos = await videoService.getCategoryVideos(category);
                if(videos) {
                    setVideos(videos);
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
    <div className='flex flex-col'>
        <h1 className='mb-2'>Recommended</h1>
        <div className='flex flex-col gap-4'>
            {videos.map(video => (
                <VideoCard key={video._id} video={video} row={true} avatar={false} />
            ))}
            </div>
    </div>
  );
}

export default VerticalVideoList;
