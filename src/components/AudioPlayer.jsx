import React, { useEffect, useState, useRef } from "react";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

const AudioPlayer = ({ book }) => {
  const [currentTime, setCurrentTime] = useState(0); // State to store current time
  const [duration, setDuration] = useState(0); // State to store audio duration
  const progressBarRef = useRef(null); 

  const handleTimeUpdate = (e) => {
    // Update the currentTime state when the audio time is changed
    setCurrentTime(e.target.currentTime);
  };

  const handleLoadedMetadata = (e) => {
    // Update the duration state when audio metadata is loaded
    setDuration(e.target.duration);
  };

  const handleProgressBarChange = () => {
    // Update the audio time based on the progress bar's value
    const newValue = progressBarRef.current.value;
    const newTime = (newValue / 100) * duration;
    setCurrentTime(newTime);
  };

  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack book={book} />
        <Controls book={book} />
        <ProgressBar
          progressBarRef={progressBarRef}
          timeProgress={currentTime}
          duration={duration}
          onChange={handleProgressBarChange}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
