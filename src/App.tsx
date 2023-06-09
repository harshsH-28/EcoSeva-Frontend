import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Axios from "axios";
import AuthService from "./services/auth.service";
import Protected from "./Protected";

interface User {
  email: string;
  password: string;
  name: string;
  phone: string;
  access_token: string;
  refresh_token: string;
}

// export type GlobalContent = {
//   user: User;
// };

// export const UserContext = createContext<GlobalContent>({
//   user: {
//     email: "",
//     password: "",
//     name: "",
//     phone: "",
//     access_token: "",
//     refresh_token: "",
//   },
// });

function App() {
  const [user, setUser] = useState<User>(AuthService.getCurrentUser());
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    console.log("App.tsx useEffect");

    function handleStorageChange() {
      let userData: User | null;
      const userStr = localStorage.getItem("user");
      if (userStr) userData = JSON.parse(userStr);
      else userData = null;
      setUser(userData);
    }

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="flex flex-col justify-between">
      {/* <UserContext.Provider value={{ user }}> */}
      {user && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      {user && <Footer />}
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;
