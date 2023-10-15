import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import SelectedBook from "../components/SelectedBook";
import Recomended from "../components/Recomended";
import Suggested from "../components/Suggested";

const ForYou = () => {
  return (
    <>
      <div className="foryou-container">
        <Sidebar />
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
