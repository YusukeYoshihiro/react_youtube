import React from 'react';
import VideoItem from './VideoItem';

// props.videos = videos
const VideoList = ({ videos, onVideoSelect, viewItemCount}) => {
  const views = Number(viewItemCount);

  const numFormatter = (num) => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + 'K';
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num < 900) {
      return num;
    }
  }
  const renderedList = videos.map((video ) => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        video={video}
        key={video.id.videoId}
        numFormatter={numFormatter(views)}
      />
    )
  })
  
  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  )
}

export default VideoList
