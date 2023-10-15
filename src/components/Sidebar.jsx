import React from "react";
import { AiOutlineHome } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { BsPen } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"
import { BiHelpCircle} from "react-icons/bi"
import { FiLogIn } from "react-icons/fi"

const Sidebar = () => {
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
          <li className="sidebar-list"><AiOutlineHome size={25} className="sidebar-icon"/>For you</li>
          <li className="sidebar-list"><BsBookmark size={25} className="sidebar-icon"/>My Library</li>
          <li className="sidebar-list"><BsPen size={25} className="sidebar-icon"/>Highlights</li>
          <li className="sidebar-list"><BsSearch size={25} className="sidebar-icon"/>Search</li>
        </ul>
      </div>
      <div className="sidebar-bottom">
        <ul className="sidebar-group">
          <li className="sidebar-list"><FiSettings size={25} className="sidebar-icon"/>Settings</li>
          <li className="sidebar-list"><BiHelpCircle size={25} className="sidebar-icon"/>Help & Support</li>
          <li className="sidebar-list"><FiLogIn size={25} className="sidebar-icon"/>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
