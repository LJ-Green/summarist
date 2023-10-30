import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import AudioPlayer from "../components/AudioPlayer";

const Player = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [id]);

  return (
    <>
      <Sidebar />
      <SearchBar />
      <div className="player-book-container">
        {book ? (
          <>
            <p className="player-book-header">{book.title}</p>
            <p
              className="player-book-summary"
              style={{ whiteSpace: "pre-line" }}
            >
              {book.summary}
            </p>
          </>
        ) : (
          <div className="audio-skeleton-wrapper">
            <div className="audio-skeleton-header"></div>
            <div className="audio-skeleton-text"></div>
            <div className="audio-skeleton-text"></div>
            <div className="audio-skeleton-text"></div>
            <div className="audio-skeleton-text"></div>
          </div>
        )}
      </div>
      <AudioPlayer bookId={id} book={book} />
    </>
  );
};

export default Player;
