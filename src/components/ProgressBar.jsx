import React, { useEffect } from "react";

export default function ProgressBar({
  progressBarRef,
  timeProgress,
  duration,
  onChange,
}) {
  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  useEffect(() => {
    if (progressBarRef.current) {
      const range = progressBarRef.current;

      const updateProgressBar = () => {
        const progress = (range.value / range.max) * 100;
        range.style.setProperty('--range-progress', `${progress}%`);
      };

      const handleProgressBarChange = () => {
        // Call the onChange prop when the progress bar changes
        if (onChange) {
          onChange(); // This triggers the function in the parent component (AudioPlayer)
        }
      };

      range.addEventListener('input', updateProgressBar);
      range.addEventListener('change', handleProgressBarChange); // Listen for changes in the progress bar

      return () => {
        range.removeEventListener('input', updateProgressBar);
        range.removeEventListener('change', handleProgressBarChange);
      };
    }
  }, [progressBarRef, onChange]);

  return (
    <div className="progress">
      <span className="time current">{formatTime(timeProgress)}</span>
      <input
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        min={0}
        max={100}
        className="audio__progress--bar"

      />
      <span className="time">{formatTime(duration)}</span>
    </div>
  );
}