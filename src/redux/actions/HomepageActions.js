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
    payload: data
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

function fetchrHomePageMore(data){
  return {
    type: types.FETCH_HOMEPAGE_MORE,
    payload: data
  }
}


export function fetchFirstList(){
  return dispatch => {
    dispatch(fetchHomePageBegin())
    return api.search.searchAll().then(
      data => {
        dispatch(fetchHomePageSuccess(data))
      }
    ).catch(error => dispatch(fetchHomePageFailure(error)))
  }
}

export function fetchMore(pageToken){
  return dispatch => {
    dispatch(fetchMoreBegin())
    return api.search.searchAll(pageToken).then(
      data => {
        dispatch(fetchrHomePageMore(data))
      }
    )
  }
}