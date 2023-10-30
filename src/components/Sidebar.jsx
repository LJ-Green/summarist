import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BsPen } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = ({ activePage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    console.log('working');
    setIsSidebarOpen(!isSidebarOpen);
    const sidebarWrapper = document.querySelector('.sidebar-wrapper');
    if (isSidebarOpen) {
      sidebarWrapper.classList.remove('show');
    } else {
      sidebarWrapper.classList.add('show');
    }
  };

  const sidebarLinks = [
    {
      name: "For You",
      path: "/foryou",
      icon: <AiOutlineHome size={25} className="sidebar-icon" />,
    },
    {
      name: "My Library",
      path: "/mylibrary",
      icon: <BsBookmark size={25} className="sidebar-icon" />,
    },
    {
      name: "Highlights",
      path: "/highlights",
      icon: <BsPen size={25} className="sidebar-icon" />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FiSettings size={25} className="sidebar-icon" />,
    },
    {
      name: "Login",
      path: "/login",
      icon: <FiLogIn size={25} className="sidebar-icon" />,
    },
  ];

  return (
    <>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <GiHamburgerMenu size={25} />
      </div>
      <div className="sidebar-wrapper">
        <figure>
          <img
            className="sidebar-logo"
            src="https://summarist.vercel.app/_next/static/media/logo.1b1c490b.png"
            alt="logo"
          />
        </figure>
        <div>
          <ul>
            {sidebarLinks.map((link) => (
              <li
                key={link.name}
                className={`sidebar-link ${
                  activePage === link.name ? "active" : ""
                }`}
                onClick={() => navigate(link.path)}
              >
                {link.icon}
                <span className="link-name">{link.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
