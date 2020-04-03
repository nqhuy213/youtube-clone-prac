import React, { Component } from 'react'
import {getSearchParam} from '../services/search-params'
import { searchByKeyword, searchByKeywordMore } from '../redux/actions/SearchActions';
import { connect } from 'react-redux';
import VideoList from '../components/Videos/VideoList/List/VideoList';
import VideoItem from '../components/Videos/VideoList/VideoItem/VideoItem';
import exVideo from '../videoExample.json'

class ResultPage extends Component {

  componentDidMount(){
    if(!this.getSearchQuery() ){
      this.props.history.push('/')
    }
    this.props.searchByKeyword(this.getSearchQuery())
  }

  componentDidUpdate(prevProps){
    if (prevProps.location.search !== this.props.location.search) {
      this.props.history.go(0)
    }
  }

  getSearchQuery() {
    return getSearchParam(this.props.location, 'search_query');
  }

  bottomCallback(){
    this.props.searchByKeywordMore(this.props.nextPageToken, this.props.keyword)
  }



  render() {
    var {toShow, moreResultLoading} = this.props
    return (
      <div className='video-list result'>
        <VideoList 
        items={toShow}
        bottomCallback={this.bottomCallback.bind(this)}
        showLoader={moreResultLoading}
        related={false}
        />
      </div>
      
    )
  }
}

function mapStateToProps(state) {
  return{
    pageIsLoading: state.SearchResult.loading,
    moreResultLoading: state.SearchResult.results.loading,
    toShow: state.SearchResult.results.toShow,
    nextPageToken: state.SearchResult.results.nextPageToken,
    keyword: state.SearchResult.keyword
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchByKeyword: (keyword) => dispatch(searchByKeyword(keyword)),
    searchByKeywordMore: (pageToken, keyword) => dispatch(searchByKeywordMore(pageToken, keyword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage)