import React, { createContext, useContext, useState, useEffect } from "react";
// import Loader from "../Components/Loader";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(false);
  const login = async (username, password) => {
    // setloading(true);
    const data = {
      email: username,
      password: password,
    };
    setToken("abcdddd");
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VJZCI6ImFiYzEyMyIsInVzZXJJZCI6IjY4MWRmMjNhYzY5MTI3MWJmYmRlMzM4NSIsImlhdCI6MTc0NzczMjEwOCwiZXhwIjoxNzQ3NzM1NzA4fQ.1bNRDxKbg-JkrFbmHTX9gxn0ci4pE7CA-Ye5xw3T8Jk"
    );
    // try {
    //   const res = await LOGIN_API(data);
    //   setloading(false);
    //   localStorage.setItem("token", res.token);
    //   localStorage.setItem("user", JSON.stringify(res.admin));
    //   setloading(false);
    //   setToken(res.token);
    // } catch (error) {
    //   setloading(false);
    // }
  };
  const logout = () => {
    // setloading(true);
    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setToken(null);
      setUser(null);
      setloading(false);
    }, 500);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {loading ? <h1>loading</h1> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
