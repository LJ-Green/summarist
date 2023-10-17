import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import SelectedBook from "../components/SelectedBook";
import Recomended from "../components/Recomended";
import Suggested from "../components/Suggested";

const ForYou = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Extract the active page based on the pathname
  let activePage = "For you";
  if (pathname === "/my-library") {
    activePage = "My Library";
  } else if (pathname === "/highlights") {
    activePage = "Highlights";
  } else if (pathname === "/search") {
    activePage = "Search";
  }

  return (
    <>
      <div className="foryou-container">
        <Sidebar activePage={activePage} /> {/* Pass the activePage prop */}
        <div className="foryou-content-wrapper">
          <SearchBar />
          <div className="foryou-wrapper">
            <SelectedBook />
            <Recomended />
            <Suggested />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForYou;
