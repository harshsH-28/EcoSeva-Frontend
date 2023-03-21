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
import AuthService from "./service/auth.service";
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
    if (!user) {
      setUser(AuthService.getCurrentUser());
    }
    console.log("user", user);
  }, [isEdit]);

  window.addEventListener("storage", () => {
    setIsEdit(!isEdit);
  });

  return (
    <div className="flex flex-col justify-between">
      {/* <UserContext.Provider value={{ user }}> */}
      {user && <Navbar />}
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />}></Route>
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
