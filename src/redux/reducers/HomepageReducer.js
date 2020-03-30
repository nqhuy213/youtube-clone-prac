import * as types from '../types'

const initialState = {
  loading: false,
  data: {
    nextPageToken: ''
  } 
  }

export default function Homepage(state = initialState,
                                 action = {}){
  switch(action.type) {
    case types.FETCH_HOMEPAGE_BEGIN:
      return {
        loading: true,
        data:{
          nextPageToken: ''
        }
      }
    case types.FETCH_HOMEPAGE_SUCCESS:
      return {
        loading: false,
        data: {
          nextPageToken: action.payload.nextPageToken,
          toShow: action.payload.items
        }
      }
    case types.FETCH_HOMEPAGE_FAILURE:
      return {
        loading: false,
        error: action.payload.error
      }
    case types.FETCH_HOMEPAGE_MORE_BEGIN:
      return{
        loading:true,
        ...state
      }
    case types.FETCH_HOMEPAGE_MORE:
      return {
        loading: false,
        data:{
          nextPageToken:action.payload.nextPageToken,
          toShow: [...state.data.toShow, ...action.payload.items]
        }
      }
    default: return state
  }

}