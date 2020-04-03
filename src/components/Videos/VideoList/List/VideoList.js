import React, { Component } from 'react'
import VideoItem from '../VideoItem/VideoItem'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from 'semantic-ui-react';
import './VideoList.scss'
export default class VideoList extends Component {

  render() {
    const {items, showLoader} = this.props
    var videoList = items.map(video => (
      <div key={video.id.videoId}><VideoItem video={video} pathname='/watch'
      search={`?v=${video.id.videoId}`} related={this.props.related}/><br/></div>
    ))
    return (
        <InfiniteScroll
            dataLength={items.length}
            next={this.props.bottomCallback}
            hasMore={true}
            style={{overflow: 'hidden', display: 'flex'}}
          >
            <div className='list-container'>{videoList}</div>
        </InfiniteScroll>       
    )
  }
}
