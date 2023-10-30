import React from "react";
import { AiOutlineStar, AiOutlineCloseCircle } from "react-icons/ai";

const BookCard = ({
  book,
  handleBookClick,
  showRemoveButton,
  handleRemoveBook,
}) => {
  const handleClick = () => {
    handleBookClick(book);
  };

  const removeBook = (id) => {
    handleRemoveBook(id);
  };

  return (
    <div className="book-card" onClick={handleClick}>
      <div className="subscription-status">
        {book.subscriptionRequired ? "Premium" : "Free"}
      </div>
      <img className="bookcard-img" src={book.imageLink} alt={book.title} />
      <div className="book-details">
        <p className="bookcard-title">{book.title}</p>
        <p className="bookcard-author">{book.author}</p>
        <p className="bookcard-subtitle">{book.subTitle}</p>
        <div className="bookcard-numerical-info">
          <p className="rating">
            <AiOutlineStar />
            {book.averageRating}
          </p>
        </div>
      </div>
      {showRemoveButton && (
        <div className="remove-button">
          <button onClick={() => removeBook(book.id)}>
            <AiOutlineCloseCircle size={22} />
          </button>
        </div>
      )}
    </div>
  );
};

export default BookCard;
