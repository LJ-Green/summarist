import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai"

const Suggested = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Make a GET request to the API
    fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested')
      .then(response => response.json())
      .then(data => {
        // Set the first 5 books from the API response to the state
        setBooks(data.slice(0, 5));
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      <p className="recommended-heading">Suggested Books</p>
      <p className="recommended-subheading">Browse some more books</p>
      <div className="recommended-books-container">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <div className="subscription-status">
              {book.subscriptionRequired ? "Premium" : "Free"}
            </div>
            <img className="recommended-img" src={book.imageLink} alt={book.title} />
            <div className="book-details">
              <p className="recommended-title">{book.title}</p>
              <p className="recommended-author">{book.author}</p>
              <p className="recommended-subtitle">{book.subTitle}</p>
              <div className="recommended-book-numerical-info">
                <p className="rating"><AiOutlineStar />{book.averageRating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggested;
