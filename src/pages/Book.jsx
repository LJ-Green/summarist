import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineAudio } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import { PiBookOpenText } from "react-icons/pi";
import { PiBookmarkSimpleBold } from "react-icons/pi";

const Book = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    fetch(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [id]);

  useEffect(() => {
    const savedBooksFromStorage = localStorage.getItem("savedBooks");
    const savedBooks = savedBooksFromStorage ? JSON.parse(savedBooksFromStorage) : [];
    const bookExists = savedBooks.some((savedBook) => savedBook.id === id);
    setIsAdded(bookExists);
  }, [id]);

  const handleBookClick = (book) => {
    const savedBooksFromStorage = localStorage.getItem("savedBooks");
    const savedBooks = savedBooksFromStorage ? JSON.parse(savedBooksFromStorage) : [];
    const updatedBooks = [...savedBooks, book];
    localStorage.setItem("savedBooks", JSON.stringify(updatedBooks));
    setIsAdded(true);
  };

  return (
    <>
      {book && (
        <>
          <Sidebar />
          <SearchBar />
          <div className="content-wrapper book">
            <div className="book-content">
              <div className="book-info">
                <p className="book-title">{book.title}</p>
                <p className="book-author">{book.author}</p>
                <p className="book-subtitle">{book.subTitle}</p>
              </div>
              <div className="book-features">
                <div className="feature">
                  <p className="feature-break">
                    <AiOutlineStar className="feature-icon" size={20} />
                    {book.averageRating} ({book.totalRating} Ratings)
                  </p>
                  <p className="feature-break">
                    <AiOutlineAudio className="feature-icon" size={20} />
                    {book.type}
                  </p>
                </div>
                <div className="feature">
                  <p className="feature-break">
                    {" "}
                    <AiOutlineClockCircle className="feature-icon" size={20} />
                    {book.subscriptionRequired ? "Premium" : "Free"}
                  </p>
                  <p className="feature-break">
                    <HiOutlineLightBulb className="feature-icon" size={20} />
                    {book.keyIdeas} Key Ideas
                  </p>
                </div>
              </div>
              <div className="book-buttons">
                <button
                  className="active-book-button"
                  onClick={() => {
                    navigate(`/player/${id}`);
                  }}
                >
                  <span className="book-button-inner">
                    <PiBookOpenText className="feature-icon" size={20} />
                    Read
                  </span>
                </button>
                <button
                  className="active-book-button"
                  onClick={() => {
                    navigate(`/player/${id}`);
                  }}
                >
                  <span className="book-button-inner">
                    <AiOutlineAudio className="feature-icon" size={20} />
                    Listen
                  </span>
                </button>
              </div>
              <div className="add-to-library">
                <span
                  className="add-to-inner"
                  onClick={() => !isAdded && handleBookClick(book)}
                  style={{ cursor: isAdded ? 'not-allowed' : 'pointer', opacity: isAdded ? 0.5 : 1 }}
                >
                  {isAdded ? (
                    <>
                      <PiBookmarkSimpleBold className="feature-icon" size={26} />
                      Added
                    </>
                  ) : (
                    <>
                      <PiBookmarkSimpleBold className="feature-icon" size={26} />
                      Add title to My Library
                    </>
                  )}
                </span>
              </div>
              <div className="book-tags">
                <p className="tags-header">What's it about?</p>
                <div className="tags-container">
                  {book.tags.map((tag, index) => (
                    <p className="book-tag" key={index}>
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
              <p>{book.bookDescription}</p>
              <p className="author-header">About the Author</p>
              <p>{book.authorDescription}</p>
            </div>
            <div className="active-book-img-container">
              <img className="active-book-img" src={book.imageLink} alt={book.title} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Book;
