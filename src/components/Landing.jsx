import React from 'react'
import { useState } from 'react'
import LoginModal from './LoginModal';

const Landing = () => {
const [isLoginModalOpen, setLoginModalOpen] = useState(false)

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <section id="landing">
      <div class="container">
        <div class="row">
          <div class="landing__wrapper">
            <div class="landing__content">
              <div class="landing__content__title">
                Gain more knowledge <br class="remove--tablet" />
                in less time
              </div>
              <div class="landing__content__subtitle">
                Great summaries for busy people,
                <br class="remove--tablet" />
                individuals who barely have time to read,
                <br class="remove--tablet" />
                and even people who don’t like to read.
              </div>
              <button onClick={openLoginModal} class="btn home__cta--btn">Login</button>
            </div>
            <figure class="landing__image--mask">
              <img src="https://summarist.vercel.app/_next/static/media/landing.e4787d01.png" alt="landing" />
            </figure>
          </div>
        </div>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </section>
  )
}

export default Landing