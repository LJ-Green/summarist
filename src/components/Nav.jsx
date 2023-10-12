import React from "react";
import LoginModal from "./LoginModal";
import { useState } from "react";

const Nav = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <figure className="nav__img--mask">
          <img
            className="nav__img"
            src="https://summarist.vercel.app/_next/static/media/logo.1b1c490b.png"
            alt="logo"
          />
        </figure>
        <ul className="nav__list--wrapper">
          <li className="nav__list nav__list--login" onClick={openLoginModal}>
            Login
          </li>
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </nav>
  );
};

export default Nav;
