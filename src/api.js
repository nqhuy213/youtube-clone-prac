const API_KEY = 'AIzaSyCiAur9IE22chQYJMh9NKPITIlEt7JxTlQ'
const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular'
const CHANNEL_URL =   'https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics'


export default {
  search: {
    searchAll: async (pageToken) => {
      var apiUrl
      if (pageToken === undefined) {
        apiUrl = SEARCH_URL + '&key=' + API_KEY
      }
      else{
        apiUrl = SEARCH_URL + '&pageToken=' + pageToken + '&key=' + API_KEY
      }
      const result = await fetch(apiUrl)
      const data = await result.json()
      return data
    },
    searchQuery: async (pageToken, query) => {

    }
  },
  channel: {
    fetchById: async (channelId) => {
      const apiUrl = CHANNEL_URL + `&id=${channelId}&key=${API_KEY}`
      const result = await fetch(apiUrl)
      const data = await result.json()
      return data
    }
  }
}