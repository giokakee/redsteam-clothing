import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

import defaultAvatar from "../assets/c9ccb3f1376587ffcbab8ad3009e8c52cc1f0389.jpg";

import testUser from "../assets/logo192.png";

import { FaUser } from "react-icons/fa";
import { PiHandEyeFill } from "react-icons/pi";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function Navbar() {
  const [user, setUser] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={() => navigate("/")}>
        <PiHandEyeFill size={24} color="#FF4000" />
        <p>RedSeam Clothing</p>
      </div>

      <button onClick={() => setUser(!user)}>tesrrrrrrt</button>

      <div className="navbar-right">
        {user ? (
          <div className="user-info">
            <FaShoppingCart size={20} color="#10151F" />
            <img src={defaultAvatar} alt="Avatar" className="avatar" />
          </div>
        ) : (
          <div className="login-link" onClick={() => navigate("/auth")}>
            <FaUser size={16} color="#10151F" />
            <p>Log in</p>
          </div>
        )}
      </div>
    </nav>
  );
}
