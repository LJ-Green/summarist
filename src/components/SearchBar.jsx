import React from 'react';
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className='search-container'>
      <div className='search-input-container'>
        <input className='search-input' placeholder='Search for books' />
        <BsSearch size={25} className='search-icon' />
      </div>
    </div>
  );
}

export default SearchBar;
