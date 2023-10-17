import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BsPen } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";

const Sidebar = ({ activePage }) => {
  const sidebarLinks = [
    { name: "For you", icon: <AiOutlineHome size={25} className="sidebar-icon" /> },
    { name: "My Library", icon: <BsBookmark size={25} className="sidebar-icon" /> },
    { name: "Highlights", icon: <BsPen size={25} className="sidebar-icon" /> },
    { name: "Search", icon: <BsSearch size={25} className="sidebar-icon" /> },
  ];

  const sidebarBottomLinks = [
    { name: "Settings", icon: <FiSettings size={25} className="sidebar-icon" /> },
    { name: "Help & Support", icon: <BiHelpCircle size={25} className="sidebar-icon" /> },
    { name: "Login", icon: <FiLogIn size={25} className="sidebar-icon" /> },
  ];

  return (
    <div className="sidebar">
      <figure>
        <img
          className="sidebar-img"
          src="https://summarist.vercel.app/_next/static/media/logo.1b1c490b.png"
          alt="logo"
        />
      </figure>
      <div className="sidebar-top">
        <ul className="sidebar-group">
          {sidebarLinks.map((link) => (
            <li
              key={link.name}
              className={`sidebar-list ${
                activePage === link.name ? "active" : ""
              }`}
            >
              <Link to={`/${link.name === "For you" ? "forYou" : link.name.toLowerCase()}`}>
                <div className="list-content">
                  {link.icon}
                  <span className="list-text">{link.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-bottom">
        <ul className="sidebar-group">
          {sidebarBottomLinks.map((link) => (
            <li
              key={link.name}
              className={`sidebar-list ${
                activePage === link.name ? "active" : ""
              }`}
            >
              <Link to={`/${link.name.toLowerCase()}`}>
                <div className="list-content">
                  {link.icon}
                  <span className="list-text">{link.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
