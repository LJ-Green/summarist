import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom"; // Import Link from React Router

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform your API request here
      setIsSearching(true);

      fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${debouncedSearchTerm}`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data);
          setIsSearching(false);
        })
        .catch((error) => {
          console.error("API error:", error);
          setIsSearching(false);
        });
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="search-container">
      <div className="search-input-container">
        <input
          className="search-input"
          placeholder="Search for books"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <BsSearch size={25} className="search-icon" />
      </div>

      {isSearching && <div>Loading...</div>}

      {searchResults.length > 0 && (
        <div className="search-results">
          <ul>
            {searchResults.map((result, index) => (
                <Link
                  to={
                    result.subscriptionRequired
                      ? "/chooseplan"
                      : `/book/${result.id}`
                  }
                >
              <li className="result-list" key={index}>
                  <div>
                    <img className="result-img" src={result.imageLink} />
                  </div>
                  <div>
                    <p className="result-title">{result.title}</p>
                    <p className="result-author">{result.author}</p>
                    {result.subscriptionRequired ? (
                      <p className="search-subscription">Premium</p>
                    ) : (
                      <p className="search-subscription">Free</p>
                    )}
                  </div>
              </li>
                </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
