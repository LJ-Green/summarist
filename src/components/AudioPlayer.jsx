import React, { useState, useRef, useEffect } from "react";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

const AudioPlayer = ({ book }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const audio = document.querySelector('audio');
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime);
  };

  const handleLoadedMetadata = (e) => {
    setDuration(e.target.duration);
  };

  const handleProgressBarChange = () => {
  const newValue = progressBarRef.current.value;
  const newTime = (newValue / 100) * duration;
  const audio = document.querySelector('audio');
  if (audio) {
    audio.currentTime = newTime;
    setCurrentTime(newTime); // Update the current time in the state
  }
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
