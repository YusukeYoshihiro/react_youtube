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


export default class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    selectedViewCount: null,
    videoItemViewCount:{},
  };

  componentDidMount(){
    this.onTermSubmit('Arrival');
  }

  // Api part
  onTermSubmit = async (term) => {

    const SearchRes = await getSearchInfo.get('/search', {
      params: {
        q: term
      }
    });

    const SearchResult = SearchRes.data.items
   
    // this is Function to refer viewCount 
    const ViewCountRes = await getViewCount.get('/videos', {
      params: {
        // To get Default Value of videoId from 'SearchRes' 
        id: SearchRes.data.items[0].id.videoId
      }
    });
    
    //  this is result of viewCount of Default
    const ViewCountResult = ViewCountRes.data.items[0].statistics.viewCount
  
    this.setState({ 
      // SearchResult => SearchRes.data.items
      videos: SearchResult, 
      // SearchResult => SearchRes.data.items[0],
      selectedVideo: SearchResult[0],

      // selectedVideo:{
      //   videoItemOne: SearchResult[0],
      // },

      // ViewCountResult => ViewCountRes.data.items[0].statistics.viewCount
      selectedViewCount: ViewCountResult
    })
  };

  onVideoSelect = async( video ) => {
    this.setState({ selectedVideo: video });
    
    const ViewCountRes = await getViewCount.get('/videos', {
      params: {
        id: this.state.selectedVideo.id.videoId
      }
    });

    this.setState({selectedViewCount: ViewCountRes.data.items[0].statistics.viewCount})
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
           　　<VideoDetail video={this.state.selectedVideo} viewCount={this.state.selectedViewCount}/>
           </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
                viewCount={this.state.videoItemViewCount}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
