import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import './SearchBar.scss'
import { connect } from 'react-redux'

import { searchByKeyword, searchByKeywordMore } from '../../redux/actions/SearchActions';

class SearchBar extends Component {

  state = {
    keyword: ''
  }
  
  handleInputChange(event) {
    this.setState({
      keyword: event.target.value
    })
  }

  async handleOnSubmit(event){
    this.props.searchByKeyword(this.state.keyword)
    //Redirect to Result page
  }

  render() {
    const {keyword} = this.state
    return (
      <div className='search-bar'>
        <div className='yt-logo-container'>
          <div className='logo'>Logo</div>
        </div>
        <div className='searchbox-container'>
          {/* <Search
            open={false}
            onSearchChange={this.handleInputChange.bind(this)}
            value={keyword}
            type='submit'
          /> */}
          <Form onSubmit={this.handleOnSubmit.bind(this)}>
            <Form.Input 
              placeholder='Search' 
              style={{width: 500}} 
              onChange={this.handleInputChange.bind(this)}
              value={keyword}
            />
          </Form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    keyword: state.SearchResult.keyword
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchByKeyword: (keyword) => dispatch(searchByKeyword(keyword)),
    searchByKeywordMore: (pageToken, keyword) => dispatch(searchByKeywordMore(pageToken, keyword))
  }
}

export default connect(null ,mapDispatchToProps)(SearchBar)