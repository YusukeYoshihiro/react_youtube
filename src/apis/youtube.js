import axios from 'axios'

const KEY = 'AIzaSyDn2_eCayswVj917zzVf4_AYuvV9aJDxgA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type:'video',
    maxResults: 5,
    key: KEY
  }
})
