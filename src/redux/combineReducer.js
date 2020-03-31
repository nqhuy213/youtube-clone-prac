import { combineReducers } from "redux";
import HomepageVideos from './reducers/HomepageReducer'
import SearchResult from './reducers/SearchResultReducer'

export default combineReducers({
  HomepageVideos,
  SearchResult
})