import React from 'react';
import SearchBar from './SearchBar';
import { getSearchInfo, getViewCount } from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { Youtube as videoIcon } from '@styled-icons/boxicons-logos/Youtube';
import styled from 'styled-components';


const VideoIcon = styled(videoIcon)`
   color: red;
   width:40px;
   margin-right:10px;
`;


const getVideoById = async (id) => {
  // To refer video view count
  return getViewCount.get(`/videos`, {
    params: {
      // To get default value of videoId from '/search' URL
      id: id
    }
  });
}

export default class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount(){
    this.onTermSubmit('Arrival');
  }

  // Api part
  onTermSubmit = async (term) => {

    const searchRes = await getSearchInfo.get('/search', {
      params: {
        q: term
      }
    });

    const searchResult = searchRes.data.items

    const videos = await Promise.all(searchResult.map(async res => {
      const videoId = res.id.videoId
      const detail = await getVideoById(videoId)
      const statistics = detail.data.items[0].statistics

      return { ...res, statistics }
    }))

    // debugger
  

    this.setState({ 
      // SearchResult => SearchRes.data.items
      videos, 
      // SearchResult => SearchRes.data.items[0],
      selectedVideo: videos[0],

      // ViewCountResult => ViewCountRes.data.items[0].statistics.viewCount
      // selectedViewCount: videos[0].statistics.viewCount
    })
  };

  // To get viewCount
  onVideoSelect = async( video ) => {
    this.setState({ selectedVideo: video });
    
  }

  render() {
    return (
      <div className="ui container">
        
        <div style={{display: 'flex', alignItems:'center',  padding:'10px'}} >
          <VideoIcon/>
          <h2 style={{marginTop: '0',}}>
          Search Your Favorite Video!!
          </h2>
        </div >
        {/* "onFormSubmit", "video", "onVideoSelected", "videos" are pops name */}
        {/* "" */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row stackable">
           <div className="eleven wide column"> 
           　　<VideoDetail 
               video={this.state.selectedVideo}
               />
           </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
