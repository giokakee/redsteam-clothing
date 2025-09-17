import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuthSubmit = ({ email, password, isLogin }) => {
    console.log("Auth Data:", { email, password, isLogin });
    let test = localStorage.getItem("token");
    console.log(test, "test");
  };

  return (
    <div className="auth-container">
      <h1>RedSeam Clothing</h1>
      <AuthForm isLogin={isLogin} onSubmit={handleAuthSubmit} />

      <p>
        {isLogin ? (
          <>
            Don’t have an account?{" "}
            <button onClick={() => setIsLogin(false)}>Register</button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button onClick={() => setIsLogin(true)}>Login</button>
          </>
        )}
      </p>
    </div>
  );
}
