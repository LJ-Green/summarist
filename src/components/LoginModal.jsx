import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginModal({ isOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleLogin = () => {
    // Check if the username and password are correct
    if (username === "guest@gmail.com" && password === "guest123") {
      // Redirect the user to the "For You" page
      history.push("/ForYou");
    } else {
      // Display an error message or handle incorrect credentials
      alert("Incorrect username or password. Please try again.");
    }
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <div className="modal-content">
        <h2 className="modal-header">Log in to Summarist</h2>
        <form className="modal-form">
          <button className="guest-login">Login as a Guest</button>
          <div className="divider">
            <span>or</span>
          </div>
          <button className="google-login">Login with Google</button>
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
          <button className="login-submit" type="submit" onClick={handleLogin}>Login</button>
          <p className="recovery">
            <a href="#">Forgot your password?</a>
          </p>
          <p className="recovery">
            <a href="#">Don't have an account?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
