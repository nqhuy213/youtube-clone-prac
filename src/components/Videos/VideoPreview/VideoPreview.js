import React, { Component } from 'react'
import { Image } from 'semantic-ui-react';
import { getVideoDurationString } from '../../../services/date-format'
import { Link } from 'react-router-dom';
import { getShortNumberString } from '../../../services/number-format';
import './VideoPreview.scss'
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import channel from '../../../channelExample.json'

import api from '../../../api'

TimeAgo.locale(en);
const timeAgo = new TimeAgo('en-US');

export default class VideoPreview extends Component {
  state = {
    channel: channel
  }

  // async componentDidMount(){
  //    const channelInfo = await api.channel.fetchById(this.props.video.snippet.channelId)
  //    this.setState({
  //      channel: channelInfo.items[0].snippet.thumbnails.default.url
  //    })
  // }

  render() {
    const channel = this.state.channel.items[0].snippet.thumbnails.default
    const {video, size} = this.props
    const duration = video.contentDetails ? video.contentDetails.duration : null;
    const videoDuration = getVideoDurationString(duration)
    const horizontal = this.props.horizontal ? 'horizontal' : null
    const expanded = this.props.expanded ? 'expanded' : null
    const videoTitle = video.snippet.title
    const channelTitle = video.snippet.channelTitle
    const viewAndTimeString = VideoPreview.getFormattedViewAndTime(video);
    return (
        <Link to={{pathname: this.props.pathname, search: this.props.search}} style={{width: '320px'}}>
          <div className={['video-preview', horizontal, expanded].join(' ')}>
            <div className="thumbnail-container">
              <Image src={video.snippet.thumbnails[size].url} />
              <div className='duration-label'>
                <span>{videoDuration}</span>
              </div>
            </div>
            <div className='video-info'>
              <div className='channel-avatar'>
                <Image src={channel.url} style={{
                  borderRadius: '50%',
                }}/>
              </div>
              <div className='video-title-header'><span>{videoTitle}</span></div>
              <div className='video-extra-info'>
                <div className='video-channel-title'><span>{channelTitle}</span></div>
                <div className='view-and-time'>{viewAndTimeString}</div>
              </div>
            </div>
          </div>
        </Link>
      
    )
  }
  static getFormattedViewAndTime(video) {
    const publicationDate = new Date(video.snippet.publishedAt);
    const viewCount = video.statistics ? video.statistics.viewCount : null;
    if(viewCount) {
      const viewCountShort = getShortNumberString(video.statistics.viewCount);
      return `${viewCountShort} views • ${timeAgo.format(publicationDate)}`;
    }
    return '';
  }
}
