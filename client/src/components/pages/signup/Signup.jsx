import "./Signup.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    if (password !== confirmPassword) {
      alert("Password and confirm password do not match");
      return;
    }

    try {
      const result = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      result.data && window.location.replace("/login");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="signup">
      <div className="signupLeft">
        <form className="signupForm" onSubmit={handleSubmit}>
          <h2 className="signupTitle">Create Your Account</h2>

          <label>User Name</label>
          <input
            type="text"
            className="signupInput"
            placeholder="example"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            className="signupInput"
            placeholder="dummy@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            className="signupInput"
            placeholder="*******"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            className="signupInput"
            placeholder="*******"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="signupButton" type="submit">
            Sign Up
          </button>

          <span className="signupForgot">Forgot Password?</span>

          <Link to="/login" className="loginLink">
            <button type="button" className="loginButton">Login</button>
          </Link>

          {error && (
            <span className="signupError">
              Something went wrong!
            </span>
          )}
        </form>
      </div>

      <div className="signupRight">
        <i className="fa-solid fa-pen-nib blogIcon"></i>
        <p className="signupDescription">
          Join the community of writers and readers on our vibrant pink-themed blog.
          Share your voice, discover stories, and connect through words.
        </p>
      </div>
    </div>
  );
}
