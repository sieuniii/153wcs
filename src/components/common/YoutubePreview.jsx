import React from "react";
import YouTube from "react-youtube";

function YoutubePreview() {
  const videoId = "DpxqxOFSsFk"; // YouTube 동영상 ID (URL의 v 파라미터 값)

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0, // 자동 재생 여부 (0 또는 1)
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
}

export default YoutubePreview;
