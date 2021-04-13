import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { Youtube as videoIcon } from '@styled-icons/boxicons-logos/Youtube';
import styled from 'styled-components';


const VideoIcon = styled(videoIcon)`
   color: red;
   width:40px;
   margin-right:10px;
`;


export default class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount(){
    this.onTermSubmit('Otani');
  }

  // Api part
  onTermSubmit = async (term) => {

    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ 
      videos: res.data.items, 
      selectedVideo: res.data.items[0]
    })
  };

  onVideoSelect = (video) => {
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
           　　<VideoDetail video={this.state.selectedVideo} />
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
