import * as types from '../types'

const initialState = {
  keyword: '',
  loading: false,
  results: {
    nextPageToken: '',
    loading: false, 
    toShow: []
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
      const final = []
      action.payload.data.items.forEach(item => {
        if (item.id.kind === 'youtube#video') {
          final.push(item)
        }
      });
      return{
        
        loading: false,
        keyword: action.payload.keyword,
        results:{
          nextPageToken: action.payload.data.nextPageToken,
          loading:false,
          toShow: final
        }
      }
    case types.SEARCH_BY_KEYWORD_MORE_BEGIN:
      return {
        ...state,
        results: {
          ...state.results,
          
          loading:true
        }
      }
    case types.SEARCH_BY_KEYWORD_MORE_SUCCESS:
      const final2 = []
      action.payload.data.items.forEach(item => {
        if (item.id.kind === 'youtube#video') {
          final2.push(item)
        }
      })
      var prevToShow = state.results.toShow
      var prevToShowId = state.results.toShow.map(item => item.id.videoId)
      for (let i = 0; i < final2.length; i++) {
        const item = final2[i];
        if(prevToShowId.indexOf(item.id.videoId) === -1){
          prevToShow.push(item)
        }
      }
      return {
        ...state,
        results: {
          loading: false,
          nextPageToken:action.payload.data.nextPageToken,
          toShow: prevToShow
        }
      }

    default: return state
  }
}