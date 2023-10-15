import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import { LiaBackwardSolid } from "react-icons/lia";

const Player = () => {
  // const { id } = useParams();

  // const [book, setBook] = useState(null);

  // useEffect(() => {
  //   fetch(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBook(data);
  //     })
  //     .catch((error) => console.error("Error fetching data: ", error));
  // }, [id]);

  return (
    <>
      <Sidebar />
      <SearchBar />
      <div className="player-container">
        <div className="player-book-info">
          <figure>
            <img alt="IMAGE" />
          </figure>
          <span>
            <p>How to Win Friends and Influence People in the Digital Age</p>
            <p>Dale Carniage</p>
          </span>
        </div>
        <div className="player-controls">
          <div><LiaBackwardSolid/></div>
          <div><LiaBackwardSolid/></div>
          <div><LiaBackwardSolid/></div>
        </div>
      </div>
    </>
  );
};

export default Player;
