import * as types from '../types'
import api from '../../api'

function fetchHomePageBegin() {
  return {
    type: types.FETCH_HOMEPAGE_BEGIN
  }
}

function fetchHomePageSuccess(data) {
  return {
    type: types.FETCH_HOMEPAGE_SUCCESS,
    payload: {
      nextPageToken: data.nextPageToken,
      items: data.items
    }
  }
}
function fetchHomePageFailure(error) {
  return {
    type: types.FETCH_HOMEPAGE_FAILURE,
    payload: {error}
  }
}

function fetchMoreBegin(){
  return {
    type: types.FETCH_HOMEPAGE_MORE_BEGIN
  }
}

function fetchHomePageMore(data){
  return {
    type: types.FETCH_HOMEPAGE_MORE,
    payload:  {
      nextPageToken: data.nextPageToken,
      items: data.items}
  }
}


export function fetchFirstList(){
  return dispatch => {
    dispatch(fetchHomePageBegin())
    return api.videos.fetchMostPopular().then(
      data => {
        dispatch(fetchHomePageSuccess(data))
      }
    ).catch(error => dispatch(fetchHomePageFailure(error)))
  }
}

export function fetchMore(pageToken){
  return dispatch => {
    dispatch(fetchMoreBegin())
    return api.videos.fetchMostPopular(pageToken).then(
      data => {
        dispatch(fetchHomePageMore(data))
      }
    )
  }
}