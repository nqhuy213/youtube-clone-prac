import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import './SearchBar.scss'
import { withRouter } from 'react-router-dom';
import {getSearchParam} from '../../services/search-params'


class SearchBar extends Component {

  state = {
    keyword: this.getSearchQuery()
  }
  
  getSearchQuery() {
    return getSearchParam(this.props.location, 'search_query');
  }

  handleInputChange(event) {
    this.setState({
      keyword: event.target.value
    })
  }

  handleOnSubmit(event){
    //Redirect to Result page
    if(this.state.keyword){
      this.props.history.push(`/results?search_query=${this.state.keyword}`)
    }
  }

  render() {
    const {keyword} = this.state
    return (
      <div className='search-bar'>
        <div className='yt-logo-container'>
          <a href='/'>
            <div className='logo'>Logo</div>
          </a>
        </div>
        <div className='searchbox-container'>
          <Form onSubmit={this.handleOnSubmit.bind(this)}>
            <Form.Input 
              placeholder='Search' 
              style={{width: 500}} 
              onChange={this.handleInputChange.bind(this)}
              value={keyword || ''}
            />
          </Form>
        </div>
      </div>
    )
  }
}



export default withRouter(SearchBar)