import "./AuthPage.css";
import { useState } from "react";
import AuthForm from "../components/auth/AuthForm";
import backgroundImage from "../assets/62bc5492a876268b6b9fc395f006a9259cafde47.png";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const { user } = useSelector((state) => state.auth);

  if (user) return <Navigate to="/" replace />;

  return (
    <div className="auth-page">
      <div className="auth-background">
        <img src={backgroundImage} alt="auth-bg" border="0" />
      </div>

      <div className="auth-content">
        <div className="auth-container">
          <h1>{isLogin ? "Log in" : "Registration"}</h1>
          <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />

          <p className="toggle-link">
            {isLogin ? (
              <>
                Not a member?{" "}
                <button onClick={() => setIsLogin(false)}>Register</button>
              </>
            ) : (
              <>
                Already member?{" "}
                <button onClick={() => setIsLogin(true)}>Login</button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
