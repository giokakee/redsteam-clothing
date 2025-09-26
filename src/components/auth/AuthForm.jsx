import "./AuthForm.css";
import { useEffect, useState } from "react";
import InputField from "./InputField";
import defaultAvatar from "../../assets/blank-avatar-photo-place-holder-600nw-1095249842.jpg";
import { validateRegister } from "../../utils/validation";
import { registerUser, loginUser } from "../../features/auth/authThunk";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Toast from "../Toast";

export default function AuthForm({ isLogin, onSubmit }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(defaultAvatar);
  const [fileError, setFileError] = useState(false);
  const [errors, setErrors] = useState({});

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(defaultAvatar);
    }
  }, [file]);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({ ...prevData, [name]: value }));

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleFileChange = (e) => {
    setFileError(false);
    const selectedFile = e.target.files[0];

    if (selectedFile && !selectedFile.type.startsWith("image/")) {
      setFileError(true);
      setFile(null);
      setPreview(defaultAvatar);
      return;
    }

    setFile(selectedFile);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(loginUser(loginData));

      if (loginUser.rejected.match(resultAction)) {
        setShowError(true);
      } else {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage("Invalid email or password!");

      setShowError(true);
    }

    setLoginData({ email: "", password: "" });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateRegister(registerData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      return;
    }

    const formData = new FormData();
    formData.append("username", registerData.username);
    formData.append("email", registerData.email);
    formData.append("password", registerData.password);
    formData.append("password_confirmation", registerData.confirmPassword);
    if (file) {
      formData.append("avatar", file);
    }

    try {
      const resultAction = await dispatch(registerUser(formData));

      if (registerUser.rejected.match(resultAction)) {
        setShowError(true);
      } else {
        navigate("/");
      }

      // dispatch(registerUser(formData));
      // navigate("/");
    } catch (err) {
      setErrorMessage("Email already exists");
      setShowError(true);
    }

    setRegisterData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const removeFile = () => {
    setFile(null);
    setFileError(false);
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
            placeholder="Email "
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
            <img
              src={preview}
              alt="Avatar"
              height={30}
              style={fileError ? { border: "1px solid red" } : {}}
            />
            <div className="upload-button">
              <input id="file-input" type="file" onChange={handleFileChange} />
              <label htmlFor="file-input">Upload new</label>
            </div>
            <p className="remove-button" onClick={removeFile}>
              Remove
            </p>
          </div>
          <InputField
            type="text"
            name="username"
            error={errors.username}
            value={registerData.username}
            onChange={handleRegisterChange}
            placeholder="Username"
          />
          <InputField
            type="email"
            name="email"
            error={errors.email}
            value={registerData.email}
            onChange={handleRegisterChange}
            placeholder="Email"
          />
          <InputField
            type="password"
            name="password"
            error={errors.password}
            value={registerData.password}
            onChange={handleRegisterChange}
            placeholder="Password"
          />
          <InputField
            type="password"
            name="confirmPassword"
            error={errors.confirmPassword}
            value={registerData.confirmPassword}
            onChange={handleRegisterChange}
            placeholder="Confirm Password"
          />
          <button type="submit" className="submit-button">
            Register
          </button>
        </div>
      )}

      <Toast
        message={errorMessage}
        show={showError}
        onClose={() => setShowError(false)}
      />
    </form>
  );
}
