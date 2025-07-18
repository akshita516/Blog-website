import "./topbar.css";
import { Link } from "react-router-dom";
import React from "react";
import {useContext} from "react";
import {Context} from "../../context/Context.js"

export default function TopBar() {
  const {user,dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () =>{
    localStorage.removeItem("user");
    dispatch({type:"LOGOUT"});
  }

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">WRITE</Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img
              className="topImg"
              src={user.profilePicture?PF+user.profilePicture:"https://raw.githubusercontent.com/primer/octicons/main/icons/person-24.svg"}
              alt="User profile"
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/signup">REGISTER</Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
