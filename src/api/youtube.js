import axios from 'axios'

const API_KEY = "AIzaSyCIQuKMizNGmT-Y09FZxHWawo7m8rjVvhc"

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: API_KEY
    }
})