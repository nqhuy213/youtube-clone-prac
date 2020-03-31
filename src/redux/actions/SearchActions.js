import * as types from '../types'
import api from '../../api'


function searchByKeywordBegin(data) {
  return {
    type: types.SEARCH_BY_KEYWORD_BEGIN,
    payload: {
      keyword: data
    }
  }
}

function searchByKeywordSuccess(data) {
  return {
    type: types.SEARCH_BY_KEYWORD_SUCCESS,
    payload: data
  }
}

function searchByKeywordMoreBegin(data){
  return {
    type: types.SEARCH_BY_KEYWORD_MORE_BEGIN,
    payload: data
  }
}

function searchByKeywordMoreSuccess(data){
  return {
    type: types.SEARCH_BY_KEYWORD_MORE_SUCCESS,
    payload: data
  }
}

export function searchByKeyword(keyword) {
  return dispatch => {
    dispatch(searchByKeywordBegin(keyword))
    return api.search.fetchByKeyword(undefined, keyword).then(
      data => {
        dispatch(searchByKeywordSuccess(data))
      }
    )
  }
}
export function searchByKeywordMore(pageToken, keyword) {
  return dispatch => {
    dispatch(searchByKeywordMoreBegin())
    return api.search.fetchByKeyword(pageToken, keyword).then(
      data => {
        dispatch(searchByKeywordMoreSuccess(data))
      }
    )
  }
}