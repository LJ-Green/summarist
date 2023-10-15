import React, { useState, useEffect } from "react";

const SelectedBook = () => {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const apiUrl =
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setBookData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <p className="selected-heading">Selected just for you</p>
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
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SelectedBook;
