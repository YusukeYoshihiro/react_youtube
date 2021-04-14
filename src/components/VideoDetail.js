import React from 'react'

const VideoDetail = ({ video, viewCount }) => {
  if (!video) {
    return <div>Loading....</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  const publishDate = video.snippet.publishedAt.split("T")[0];
  const views = Number(viewCount);

  const numFormatter = (num) => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + 'K';
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num < 900) {
      return num;
    }
  }


  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>

       <div style={{display: 'flex', flexDirection: ''}}>
          <p>{numFormatter(views)} views  • </p>
          <p>&nbsp; {publishDate} </p>
       </div>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail
