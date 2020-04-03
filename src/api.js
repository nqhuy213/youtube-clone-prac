const API_KEY = 'AIzaSyCvCaJ5hhU0JaXRi9_aaBSOFp4HlBCWDs0'

const API_URL = 'https://www.googleapis.com/youtube/v3/'

const api = {
  videos: {
    fetchMostPopular: async (pageToken) => {
      const searchParams = 'videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25'
      var FETCH_URL
      if (pageToken === undefined) {
        FETCH_URL = API_URL + searchParams + '&key=' + API_KEY
      }
      else{
        FETCH_URL = API_URL + searchParams + '&pageToken=' + pageToken + '&key=' + API_KEY
      }
      const result = await fetch(FETCH_URL)
      const data = await result.json()
      return data
    },
    fetchById: async (videoId) => {
      const searchParams = 'videos?part=snippet%2CcontentDetails%2Cstatistics'
      const FETCH_URL = API_URL + searchParams + '&id=' + videoId + '&key=' + API_KEY
      const result = await fetch(FETCH_URL)
      const data = result.json()
      return data
    }
  },
  channel: {
    fetchById: async (channelId) => {
      const searchParams = 'channels?part=snippet%2CcontentDetails%2Cstatistics'
      const FETCH_URL = API_URL + searchParams + `&id=${channelId}&key=${API_KEY}`
      const result = await fetch(FETCH_URL)
      const data = await result.json()
      return data
    }
  },

  search: {
    fetchByKeyword: async (pageToken, keyword) => {
      const searchParams = 'search?part=snippet&maxResults=25'
      var FETCH_URL
      if (pageToken === undefined) {
        FETCH_URL = API_URL + searchParams + `&q=${keyword}&key=${API_KEY}`
      }
      else{
        FETCH_URL = API_URL + searchParams + `&q=${keyword}&pageToken=${pageToken}&key=${API_KEY}`
      }
      const result = await fetch(FETCH_URL)
      const data = await result.json()
      
      return {
        keyword: keyword,
        data: data
      }
    },
    fetchRelatedVideos: async (pageToken, relatedToVideoId) => {
      const searchParams = 'search?part=snippet&type=video'
      var FETCH_URL 
      if (pageToken === undefined) {
        FETCH_URL = API_URL + searchParams + '&relatedToVideoId=' + relatedToVideoId + '&key=' + API_KEY
      }
      else{
        FETCH_URL = API_URL + searchParams + '&pageToken=' + pageToken + '&relatedToVideoId=' + relatedToVideoId + '&key=' + API_KEY
      }
      const result = await fetch(FETCH_URL)
      const data = await result.json()
      return data
    }
  }
  
}

export default api