import React, { useState, useRef } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { TbRewindBackward10, TbRewindForward10 } from "react-icons/tb";

const Controls = ({ book }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Check if the book object and audioLink property exist
  const audioLink = book && book.audioLink;

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  const rewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
    }
  };

  const skip = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  return (
    <div className="player-controls">
      <div className="controls">
        <button onClick={rewind}>
          <TbRewindBackward10 size={32} className="controls" />
        </button>
        <button onClick={togglePlayPause}>
          {isPlaying ? (
            <BsPlayCircle size={40} className="controls" />
          ) : (
            <BsPlayCircle size={40} className="controls" />
          )}
        </button>
        <button onClick={skip}>
          <TbRewindForward10 size={32} className="controls" />
        </button>
      </div>
      {audioLink && <audio ref={audioRef} src={audioLink}></audio>}
    </div>
  );
};

export default Controls;
