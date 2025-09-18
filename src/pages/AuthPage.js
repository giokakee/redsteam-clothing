import "./AuthPage.css";
import { useState } from "react";
import AuthForm from "../components/AuthForm";
import backgroundImage from "../assets/62bc5492a876268b6b9fc395f006a9259cafde47.png";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

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
