import React from "react";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  BigPlayButton,
} from "video-react";
import ReactPlayer from "react-player";

function videoPlayer(props) {
  return (
    <ReactPlayer url="C:\code\why-do-i-exist\Media_Videos\video (1).mp4" />
  );
}

export default videoPlayer;
