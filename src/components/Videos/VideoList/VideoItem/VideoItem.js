import React, { Component } from 'react'
import './VideoItem.scss'
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';


export default class VideoItem extends Component {

  render() {
    const {video} = this.props
    const related = this.props.related ? 'related' : null
    const videoTitle = video.snippet.title
    const videoThumbnail = this.props.related ? video.snippet.thumbnails.default.url : video.snippet.thumbnails.medium.url
    const channelTitle = video.snippet.channelTitle
    var videoDescription = ''
    if (!video.snippet.description || !video.snippet) {
      videoDescription = 'No desciption for this video.'
    }else{
      if(video.snippet.description.length >150){
        videoDescription = video.snippet.description.slice(0, 150) + '...'
      }
      else{
        videoDescription = video.snippet.description
      }
    }
    return (
      <a href={this.props.pathname + this.props.search}>
        <div className={['video-item-container', related].join(' ')}>
          <div className='item-thumbnail-container'>
            <Image className='thumbnail' src={videoThumbnail}/>
          </div>
          <div className='item-info-container'>
            <div className='item-header'>
              <div className={['item-title', related].join(' ')}>{videoTitle}</div>
              <div className='channel-view-date'>
                <span>{channelTitle}&nbsp;&nbsp;&nbsp;</span>
              </div>
            </div>
            <div className={['item-description', related].join(' ')}><span>{videoDescription}</span></div>
          </div>
        </div>
      </a>
    )
  }
 
}
