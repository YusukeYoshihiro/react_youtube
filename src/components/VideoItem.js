import React from 'react';
import '../Styles/VideoItem.css';
import moment from 'moment';

// props.video = video as " Destructuring Assignment Shorthand "
const VideoItem = ({ video, onVideoSelect }) => {
  const views = Number(video.statistics.viewCount);

  const numFormatter = (num) => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + 'K';
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num < 900) {
      return num;
    }
  }

  // console.log(video);
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
      <p>{numFormatter(views)} views • {convertDate}</p>
      <div className="content" style={{ marginTop: '10px'} }>
        <div className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  )
}

export default VideoItem

