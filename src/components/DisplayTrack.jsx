import React from "react";

const DisplayTrack = ({ book }) => {
  if (!book) {
    return 
  }

  return (
    <div className="player-book-display">
      <div>
        <img className="player-img" src={book.imageLink} />
      </div>
      <div>
        <h2 className="player-book-info">{book.title}</h2>
        <p className="player-book-info-author">{book.author}</p>
      </div>
    </div>
  );
};

export default DisplayTrack;
