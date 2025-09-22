import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

import defaultAvatar from "../assets/blank-avatar-photo-place-holder-600nw-1095249842.jpg";

import { FaUser } from "react-icons/fa";
import { PiHandEyeFill } from "react-icons/pi";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left" onClick={() => navigate("/")}>
          <PiHandEyeFill size={24} color="#FF4000" />
          <p>RedSeam Clothing</p>
        </div>

        <div className="navbar-right">
          {user ? (
            <div className="user-info">
              <FaShoppingCart size={20} color="#10151F" />
              <img
                src={user.avatar ? user.avatar : defaultAvatar}
                alt="Avatar"
                className="avatar"
              />
            </div>
          ) : (
            <div className="login-link" onClick={() => navigate("/auth")}>
              <FaUser size={16} color="#10151F" />
              <p>Log in</p>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
