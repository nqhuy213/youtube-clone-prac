import * as types from '../types'

const initialState = {
  keyword: '',
  loading: false,
  results: {
    nextPageToken: '',
    loading: false
  }
}

export default function SearchResult(state = initialState, action = {} ){
  switch (action.type){
    case types.SEARCH_BY_KEYWORD_BEGIN:
      return {
        ...state,
        loading: true,
        keyword: action.payload.keyword,
        
      }
    case types.SEARCH_BY_KEYWORD_SUCCESS:
      return{
        loading: false,
        keyword: action.payload.keyword,
        results:{
          nextPageToken: action.payload.data.nextPageToken,
          loading:false,
          toShow: action.payload.data.items
        }
      }
    case types.SEARCH_BY_KEYWORD_MORE_BEGIN:
      return {
        ...state,
        results: {
          loading: true,
        }
      }
    case types.SEARCH_BY_KEYWORD_MORE_SUCCESS:
      return {
        ...state,
        results: {
          loading: false
        }
      }

    default: return state
  }
}