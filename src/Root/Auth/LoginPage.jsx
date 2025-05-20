import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import "../../assets/css/loginpage.css";
import SplashScreen from "../Pages/Auth/SplashScreen";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const { login, token } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (validateForm()) {
    await login(email, password);
    setPassword("");
    setEmail("");
    navigate("/home");
    // }
  };
  const [active, setActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
    }, 5000); // 5 seconds

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    // <div className="page-wrapper">
    <>
      {active ? (
        <SplashScreen />
      ) : (
        <div className="login-container">
          <div className="login-card">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEmail(value);
                    setErrors((prev) => ({
                      ...prev,
                      email: !value
                        ? "Email is required"
                        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                        ? "Invalid email format"
                        : "",
                    }));
                  }}
                />
              </div>
              {errors.email && <p className="error">{errors.email}</p>}
              <div className="input-group password-group">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPassword(value);
                    setErrors((prev) => ({
                      ...prev,
                      password: !value
                        ? "Password is required"
                        : value.length < 6
                        ? "Password must be at least 6 characters"
                        : "",
                    }));
                  }}
                />
                <p
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.94 17.94A10.94 10.94 0 0112 20c-7 0-11-8-11-8a20.3 20.3 0 014.22-5.94" />
                      <path d="M1 1l22 22" />
                      <path d="M9.88 9.88a3 3 0 004.24 4.24" />
                      <path d="M12 4a10.94 10.94 0 016.36 2.22" />
                      <path d="M20.88 13.12A10.94 10.94 0 0120 12" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </p>
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
    // <div>
  );
};

export default LoginPage;
