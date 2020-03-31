import React, { Component } from 'react'
import {getSearchParam} from '../services/search-params'

class ResultPage extends Component {
  componentWillMount(){
    if(this.props.location.search === ""){
      console.log('Redirect')
      this.props.history.push('/')
    }
  }

  getSearchQuery() {
    return getSearchParam(this.props.location, 'search_query');
  }

  render() {
    console.log(this.getSearchQuery(this.props.location))
    return (
      <div>
        Search SearchPage
      </div>
    )
  }
}
export default ResultPage