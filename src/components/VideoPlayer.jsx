import React, { useRef } from 'react'
import ReactPlayer from "react-player";

const VideoPlayer = ({url , title}) => {
  const ref = useRef();
  return (
    <div>
      <ReactPlayer 
      url={url}
      controls = {true}
      width={"100%"}
      height={"auto"}
      ref={ref}
      />
      <h1>{title}</h1>
    </div>
  )
}

export default VideoPlayer;
