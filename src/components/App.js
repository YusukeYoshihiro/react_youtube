import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
import VideoList from './VideoList';

export default class App extends React.Component {
  state = { videos: [] };
   
  onTermSubmit = async (term) =>{
   
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    });
  
    this.setState({ videos: res.data.items })
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}
