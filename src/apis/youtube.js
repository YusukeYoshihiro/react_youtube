import axios from 'axios'

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getSearchInfo = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type:'video',
    maxResults: 5,
    key: KEY,
  }
})

export const getViewCount = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'statistics',
    key: KEY,
  }
})




