import React from "react";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

const AudioPlayer = ({ book }) => {
  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack book={book} />
        <Controls book={book} />
        <ProgressBar />
      </div>
    </div>
  );
};

export default AudioPlayer;
