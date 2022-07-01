import youtube  from './api/youtube';
import Search from './components/Search';
import {useState} from 'react'
import VideoList from './components/VideoList';
import Video from './components/Video';

function App() {

  const [videos, setvideos] = useState([])
  const [selectedVideo, setselectedVideo] = useState(null)

  const searchTerm=async (term)=>{
  const response=await youtube.get('/search',{
    params:{
      q:term
    }
  })

  setvideos(response.data.items)
  setselectedVideo(response.data.items[0])
  }

  const selectVideo=(video)=>{
    setselectedVideo(video)
   // console.log(video)

  }

  return (
    <div className="App">
      <Search searchTerm={searchTerm}/>
      <div className="container">
  <div className="row">
    <div className="col-sm">
      <Video selectVideo={selectedVideo}/>
    </div>
    <div className="col-sm">
    <VideoList videoList={videos} selectVideo={selectVideo}/>
    </div>
  </div>
</div>
      
      
    </div>
  );
}

export default App;
