import React, { useState, useEffect } from "react";
import { BsPlayCircle } from "react-icons/bs";

const SelectedBook = () => {
  const [bookData, setBookData] = useState(null);
  const [audioRef, setAudioRef] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  useEffect(() => {
    const apiUrl =
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setBookData(data);
        setIsLoading(false); // Set isLoading to false when data is loaded
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const playAudio = () => {
    if (audioRef) {
      if (isPlaying) {
        audioRef.pause();
      } else {
        audioRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      {!isLoading && <p className="selected-heading">Selected just for you</p>}
      {bookData && bookData.length > 0 ? (
        bookData.map((book, index) => (
          <div className="selected-wrapper" key={book.id}>
            <p className="selected-book-subtitle">{book.subTitle}</p>
            <img
              className="selected-img"
              src={book.imageLink}
              alt={book.title}
            />
            <div className="selected-book-info">
              <p className="selected-title">{book.title}</p>
              <p className="selected-author">{book.author}</p>
              {book.audioLink && (
                <div className="audio-controls">
                  <button onClick={playAudio}>
                    {isPlaying ? (
                      <BsPlayCircle size={24} />
                    ) : (
                      <BsPlayCircle size={24} />
                    )}
                  </button>
                  <audio
                    ref={(audio) => setAudioRef(audio)}
                    src={book.audioLink}
                  ></audio>
                  <p className="listen-to-summary">Listen to summary</p>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <>
          {isLoading ? (
            <>
              <div className="selected-skeleton-header"></div>
              <div className="skeleton-selected"></div>
            </>
          ) : (
            <p>No selected books available.</p>
          )}
        </>
      )}
    </div>
  );
};

export default SelectedBook;
