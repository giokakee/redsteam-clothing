import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./AuthForm.css";
import InputField from "./InputField";
import defaultAvatar from "../assets/blank-avatar-photo-place-holder-600nw-1095249842.jpg";

export default function AuthForm({ isLogin, onSubmit }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [defaultAvatarImage, setDefaultAvatarImage] = useState(defaultAvatar);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    setLoginData({ email: "", password: "" });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("we are inside register submit", registerData);

    setRegisterData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const avatarUploadHandler = (e) => {
    const file = e.target.files[0]; // Access the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDefaultAvatarImage(reader.result); // Set the image preview
      }; // Read the file as a data URL
      reader.readAsDataURL(file);
    }

    console.log(file, " this is file");
  };

  return (
    <form
      className="auth-form"
      onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit}
    >
      {isLogin ? (
        <div className="login-form">
          <InputField
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
            placeholder="Email or username"
          />
          <InputField
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
            placeholder="Password"
          />
          <button type="submit" className="submit-button" name="login">
            Log in
          </button>
        </div>
      ) : (
        <div className="register-form">
          <div className="register-avatar">
            <img src={defaultAvatarImage} alt="Avatar" height={30} />
            <div className="upload-button">
              <input
                id="file-input"
                type="file"
                onChange={avatarUploadHandler}
              />
              <label htmlFor="file-input">Upload new</label>
            </div>
            <p
              className="remove-button"
              onClick={() => setDefaultAvatarImage(defaultAvatar)}
            >
              Remove
            </p>
          </div>
          <InputField
            type="text"
            name="username"
            value={registerData.username}
            onChange={handleRegisterChange}
            placeholder="Username"
          />
          <InputField
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleRegisterChange}
            placeholder="Email"
          />
          <InputField
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleRegisterChange}
            placeholder="Password"
          />
          <InputField
            type="password"
            name="confirmPassword"
            value={registerData.confirmPassword}
            onChange={handleRegisterChange}
            placeholder="Confirm Password"
          />
          <button type="submit" className="submit-button">
            Register
          </button>
        </div>
      )}
    </form>
  );
}
