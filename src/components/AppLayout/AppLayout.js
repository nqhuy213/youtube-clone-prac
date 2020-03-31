import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'

export default class AppLayout extends Component {
  render() {
    return (
      <div className='app-layout'>
        <SearchBar/>
        {this.props.children}
      </div>
    )
  }
}
