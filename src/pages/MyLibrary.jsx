import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

const MyLibrary = () => {
  const [savedBooks, setSavedBooks] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const savedBooksFromStorage = localStorage.getItem("savedBooks");
    if (savedBooksFromStorage) {
      setSavedBooks(JSON.parse(savedBooksFromStorage));
    }
  }, []);

  const handleRemoveBook = (id) => {
    const updatedBooks = savedBooks.filter((book) => book.id !== id);
    setSavedBooks(updatedBooks);
    localStorage.setItem("savedBooks", JSON.stringify(updatedBooks));
  };

  return (
    <>
      <Sidebar />
      <SearchBar />
      <div className="content-wrapper">
        <div className="saved-books">
          <h1 className="saved-title">Saved Books</h1>
          {savedBooks.length === 0 ? (
            <div className="no-books-message">
              <p className="no-books-heading">Save your favourite books!</p>
              <p>When you save one, it will appear here</p>
            </div>
          ) : (
            <>
              <p className="saved-amount">{savedBooks.length} {savedBooks.length === 1 ? "item" : "items"}</p>
              <div className="books-container">
                {savedBooks.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    handleBookClick={() => {}}
                    showRemoveButton={true}
                    handleRemoveBook={handleRemoveBook}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MyLibrary;
