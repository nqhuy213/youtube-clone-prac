import React, { Fragment } from 'react'
import VideoPreview from '../VideoPreview/VideoPreview'
import './VideoGrid.scss'

export default function VideoGrid (props) {
  if(!props.videos || !props.videos.length){
    return <div/>
  }
  const gridItems = props.videos.map(video => {
    return(<VideoPreview 
              video={video} 
              key={video.id} 
              pathname='/watch' 
              search={`?v=${video.id}`} />)
  })
  return (
    <Fragment>
      <div className='video-grid'>
        {gridItems}
      </div>
    </Fragment>
  )
}
