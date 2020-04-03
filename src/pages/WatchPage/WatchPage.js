import React, { Component, Fragment } from 'react'
import api from '../../api'
import VideoList from '../../components/Videos/VideoList/List/VideoList'
import './WatchPage.scss'
import { withRouter } from 'react-router-dom'

class WatchPage extends Component {
  state = {
    videoId: this.props.location.search.slice(3),
    relatedVideos: [],
    nextPageToken: '',
    loading: false
  }

  async componentDidMount(){
    await this.getRelatedVideo(this.state.nextPageToken)
    await this.getRelatedVideo(this.state.nextPageToken)
    await this.getRelatedVideo(this.state.nextPageToken)
  }
  
 
  async bottomCallback(){
    await this.getRelatedVideo(this.state.nextPageToken)
  }

  async getRelatedVideo(pageToken){
    
    this.setState({loading: true})
    var fetchedData
    if(pageToken === undefined){
      fetchedData = await api.search.fetchRelatedVideos(undefined, this.state.videoId)
    }else{
      fetchedData = await api.search.fetchRelatedVideos(pageToken, this.state.videoId)
    }
    const items = fetchedData.items
    var relatedVideosIds = this.state.relatedVideos.map(item => item.id.videoId)
    var relatedVideos = this.state.relatedVideos
    for (let j = 0; j < items.length; j++) {
      if(relatedVideosIds.indexOf(items[j].id.videoId) === -1){
        relatedVideos.push(items[j])
      }        
    }

    this.setState({
      relatedVideos: relatedVideos,
      nextPageToken: fetchedData.nextPageToken
    })
  }

  render() {
    const {relatedVideos, loading} = this.state
    return (
      <div className='watch-page-container'>
        <div className='video-container'>
          <iframe 
            title={this.state.videoId}
            width="1280" 
            height="720" 
            src={`https://www.youtube.com/embed/${this.state.videoId}`}
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        <div className='video-list related'>
          <VideoList items={relatedVideos} related={true} bottomCallback={this.bottomCallback.bind(this)} showLoader={loading}/>
          
        </div>
      </div>

    )
  }
}

export default withRouter(WatchPage)