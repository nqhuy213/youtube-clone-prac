import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchFirstList, fetchMore} from '../../redux/actions/HomepageActions'
import InfiniteScroll from 'react-infinite-scroll-component'
import VideoGrid from '../../components/Videos/VideoGrid/VideoGrid'
import './HomePage.scss'
class HomePage extends Component {

  async componentDidMount(){
    this.props.fetchFirstList()
  }

  bottomCallback(){
    this.props.fetchMoreVideos(this.props.nextPageToken)
  }

  render() {
    var {toShow} = this.props
    return(
      <div className='homepage-content'>
        <div className="responsive-video-grid-container">
          <InfiniteScroll
            dataLength={toShow.length}
            next={this.bottomCallback.bind(this)}
            hasMore={true}
            style={{overflow: 'hidden'}}
          >
            <VideoGrid videos={toShow}/>
          </InfiniteScroll>
        </div>
      </div>
    )
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