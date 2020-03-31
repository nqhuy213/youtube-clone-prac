import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchFirstList, fetchMore} from '../redux/actions/HomepageActions'
import InfiniteScroll from 'react-infinite-scroll-component';
import VideoPreview from '../components/Videos/VideoPreview/VideoPreview';
import exVideo from '../videoExample.json'
import api from '../api';

class HomePage extends Component {

  // componentDidUpdate(){
  //   this.props.dispatch(fetchHomePage(this.props.nextPageToken))
  //   console.log(this.props)
  // }

  async componentDidMount(){
    // this.props.fetchFirstList()
    
  }

  bottomCallback(){
    // this.props.fetchMoreVideos(this.props.nextPageToken)
  }

  render() {
    var {toShow} = this.props
    if(toShow !== undefined){
      return (
        <InfiniteScroll
          dataLength={toShow.length}
          next={this.bottomCallback.bind(this)}
          hasMore={true}
          loader={<h1>...loading</h1>}
        >
          {toShow.map(video => (
            <React.Fragment key={video.id.videoId}>
              <h1>{video.snippet.title}</h1>
            </React.Fragment>
          ))} 
        </InfiniteScroll>
        
      )
    }
    else{
      return (
        <div style={{width:320}}>
          <VideoPreview video={exVideo} 
                       size='medium'
                       pathname='/watch'
                       search={`?v=${exVideo.id}`}
                       />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    toShow: state.HomepageVideos.data.toShow,
    nextPageToken: state.HomepageVideos.data.nextPageToken,
    loading: state.HomepageVideos.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMoreVideos: (nextPageToken) => dispatch(fetchMore(nextPageToken)),
    fetchFirstList: () => dispatch(fetchFirstList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)