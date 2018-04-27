import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = ({videos, onVideoSelected}) => {
  const videoItems = videos.map((video) =>{
    return <VideoListItem
    onVideoSelected = {onVideoSelected}
    key={video.etag}
    video={video} />
  });

  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
