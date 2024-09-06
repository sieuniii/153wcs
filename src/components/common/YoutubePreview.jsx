import React from "react";
import YouTube from "react-youtube";

function YoutubePreview() {
  const opts = {
    playerVars: {
      autoplay: 0, // 자동 재생 비활성화
    },
  };

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
        maxWidth: "100%",
        backgroundColor: "#000",
      }}
    >
      <YouTube
        videoId="dQw4w9WgXcQ" // 여기에 YouTube 동영상 ID를 입력하세요
        opts={opts}
        containerClassName="youtube-container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

export default YoutubePreview;
