import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./AuthForm.css";

export default function AuthForm({ isLogin, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ email, password, isLogin });
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <FaUser className="icon" />
        <input
          // type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <FaLock className="icon" />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="auth-btn">
        {isLogin ? "Login" : "Register"}
      </button>
    </form>
  );
}
