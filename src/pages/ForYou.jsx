import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import SelectedBook from "../components/SelectedBook";
import Recomended from "../components/Recomended";
import Suggested from "../components/Suggested";

const ForYou = () => {
  return (
    <>
      <Sidebar />
      <SearchBar />
      <div className="content-wrapper">
        <SelectedBook />
        <Recomended />
        <Suggested />
      </div>
    </>
  );
};

export default ForYou;
