import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyClZWtlPaOKeKcIcld-81059xfbEtZMauw",
  authDomain: "summarist-973d2.firebaseapp.com",
  projectId: "summarist-973d2",
  storageBucket: "summarist-973d2.appspot.com",
  messagingSenderId: "589316949635",
  appId: "1:589316949635:web:5eaa09103da81793b47db6",
  measurementId: "G-GVQFHLWJX8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function LoginModal({ isOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // User logged in successfully
        setLoginSuccess(true);
      })
      .catch((error) => {
        alert("Incorrect username or password. Please try again.");
      });
  };

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // User registered successfully
        setLoginSuccess(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const handleForgotPassword = () => {
    sendPasswordResetEmail(auth, username)
      .then(() => {
        alert("Password reset email sent. Check your inbox.");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGuestLogin = () => {
    // Simulate a guest login; you can customize this as needed
    setLoginSuccess(true);
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        // User logged in with Google
        setLoginSuccess(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <div className="modal-content">
        <h2 className="modal-header">Log in to Summarist</h2>
        <form className="modal-form">
          <button className="guest-login" onClick={handleGuestLogin}>
            Login as a Guest
          </button>
          <div className="divider">
            <span>or</span>
          </div>
          <button className="google-login" onClick={handleGoogleLogin}>
            Login with Google
          </button>
          <div className="divider">
            <span>already have an account?</span>
          </div>
          <input
            className="login-input"
            type="text"
            placeholder="Email Address"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-submit" type="button" onClick={handleLogin}>
            Login
          </button>
          <button
            className="login-submit"
            type="button"
            onClick={handleRegister}
          >
            Register
          </button>
          <p className="recovery">
            <a href="#" onClick={handleForgotPassword}>
              Forgot your password?
            </a>
          </p>
          {loginSuccess && <Navigate to="/forYou" />}
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
