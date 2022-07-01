import React from 'react'

function Video({selectVideo}) {
  //const url=`https/www.youtube.com/embed/${selectVideo?.id.videoId}`
  if(!selectVideo) return <>Loading...</>

  const url=`https://www.youtube.com/embed/${selectVideo?.id.videoId}`
  //console.log(selectVideo)
  return (
    <div>
      <div>
      <iframe width="650" height="315" src={url} title="YouTube video player"/>
      </div>
      <div className='border my-3'>
    <h4>{selectVideo?.snippet.title}</h4>
    <p className='my-3'>{selectVideo?.snippet.description}</p>
    </div>
    </div>
  )
}

export default Video