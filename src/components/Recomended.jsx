import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import the Link component
import { AiOutlineStar } from "react-icons/ai";

const Recommended = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended')
      .then(response => response.json())
      .then(data => {
        setBooks(data.slice(0, 5));
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      <p className="recommended-heading">Recommended For You</p>
      <p className="recommended-subheading">We think you'll like these</p>
      <div className="recommended-books-container">
        {books.map(book => (
          <Link to={`/book/${book.id}`} key={book.id} className="book-card">
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
