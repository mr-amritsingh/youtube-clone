import React from 'react'

function VideoItem({video, selectVideo}) {
   // console.log(video)
    const selectedVideo =()=>{
      selectVideo(video);
    }
  return (
    <div className='container my-3 border-bottom' style={{display:'flex', cursor:'pointer', alignItems:'center'}} onClick={selectedVideo}>
        <img alt="" style={{float:'left', height:'100px', width:'150px'}}src={video.snippet.thumbnails.medium.url}></img>
    {video.snippet.title}
    </div>
  )
}

export default VideoItem