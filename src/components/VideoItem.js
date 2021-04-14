import React from 'react';
import '../Styles/VideoItem.css';
import moment from 'moment';

// props.video = video as " Destructuring Assignment Shorthand "
const VideoItem = ({ video, onVideoSelect }) => {
  console.log(video);
  const convertDate = moment(video.snippet.publishedAt).fromNow();
  return (
    <div 
    　onClick={() => onVideoSelect(video)} 
    　className="video_item item"
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.channelTitle}
      />
      <p>{convertDate}</p>
      <div className="content" style={{ marginTop: '10px'} }>
        <div className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  )
}

export default VideoItem

