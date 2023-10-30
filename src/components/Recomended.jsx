import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookCard from "./BookCard";

const Recommended = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
    )
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.slice(0, 7));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleBookClick = (book) => {
    if (book.subscriptionRequired) {
      navigate("/chooseplan");
    } else {
      navigate(`/book/${book.id}`);
    }
  };

  return (
    <div>
      <p className="foryou-heading">Recommended For You</p>
      <p className="foryou-subheading">We think you'll like these</p>
      <div className="books-container">
      {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            handleBookClick={handleBookClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
