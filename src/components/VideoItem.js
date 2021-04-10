import React from 'react';
import '../Styles/VideoItem.css';

// props.video = video as " Destructuring Assignment Shorthand "
const VideoItem = ({ video, onVideoSelect }) => {
  // console.log(video);
  return (
    <div
      onClick={()=> onVideoSelect(video)}
      className="video_item item"
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.channelTitle}
      />
      <div className="content">
        <div className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  )
}

export default VideoItem

