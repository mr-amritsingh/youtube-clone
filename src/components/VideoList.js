import React from 'react'
import VideoItem from './VideoItem'

function VideoList({videoList, selectVideo}) {
    
    //console.log(videoList)

  return (
    
    <div>
        {videoList.map(video=><VideoItem video={video} key={video.id.videoId} selectVideo={selectVideo}/>)}
    </div>
    
  )
}

export default VideoList