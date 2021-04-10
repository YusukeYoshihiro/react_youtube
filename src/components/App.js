import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  // Api part
  onTermSubmit = async (term) => {

    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: res.data.items })
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container">
        {/* "onFormSubmit", "onVideoSelected", "videos" is props' name */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelected={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    )
  }
}
