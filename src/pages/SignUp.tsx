import React from "react";
import SignupImg from "../assets/Side Image (1).png";
import orImg from "../assets/OR.png";
import googleLogo from "../assets/Google.png";
import Axios from "axios";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    dob: "",
    phone: "",
  });
  const [password, setPassword] = React.useState({
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.password !== password.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const userData = {
      ...user,
      password: password.password,
    };

    const newUser = await AuthService.register(userData);
    if (!newUser) {
      alert("User already exists");
      return;
    }
    return navigate("/");
  };
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <div className="flex flex-grow justify-center items-center">
        <div className="flex shadow-lg">
          <img
            src={SignupImg}
            alt=""
            className="h-[80vh] w-[35vw] rounded-l-2xl object-cover"
          />
          <div className="h-[80vh] w-[35vw] px-11 py-6 bg-white flex flex-col justify-around items-start rounded-r-2xl">
            <p className="text-[#C4C4C4] mb-4">Get Started!</p>
            <h1 className="text-2xl font-semibold">Sign Up</h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center gap-8 my-4"
            >
              <div className="flex gap-6">
                <input
                  type="text"
                  placeholder="Email ID"
                  className="w-full border-b-[1px] border-black outline-none placeholder:text-sm"
                  value={user.email}
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-b-[1px] border-black outline-none placeholder:text-sm"
                  value={user.name}
                  onChange={(e) => {
                    setUser({ ...user, name: e.target.value });
                  }}
                />
              </div>
              <div className="flex gap-6">
                <input
                  type="text"
                  placeholder="Date of Birth(YYYY-MM-DD)"
                  className="w-full border-b-[1px] border-black outline-none placeholder:text-sm"
                  value={user.dob}
                  onChange={(e) => {
                    setUser({ ...user, dob: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="Phone Number "
                  className="w-full border-b-[1px] border-black outline-none placeholder:text-sm"
                  value={user.phone}
                  onChange={(e) => {
                    setUser({ ...user, phone: e.target.value });
                  }}
                />
              </div>
              <div className="flex gap-6">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border-b-[1px] border-black outline-none placeholder:text-sm"
                  value={password.password}
                  onChange={(e) => {
                    setPassword({ ...password, password: e.target.value });
                  }}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full border-b-[1px] border-black outline-none placeholder:text-sm"
                  value={password.confirmPassword}
                  onChange={(e) => {
                    setPassword({
                      ...password,
                      confirmPassword: e.target.value,
                    });
                  }}
                />
              </div>
              <button
                type="submit"
                className="bg-[#86B049] py-2 px-6 w-full rounded-3xl"
              >
                Register
              </button>
              <img
                src={orImg}
                alt="There is a another option"
                className="w-56"
              />
              <button className="bg-[#CEB5FF] border-[1px] border-black py-2 px-6 w-full rounded-3xl flex justify-center items-center">
                <img src={googleLogo} alt="GoogleImg" className="w-4 mr-2" />
                Sign in with Google
              </button>
            </form>
            <span className="font-semibold">
              Already a user?{" "}
              <a href="/login" className="text-sky-700">
                Login
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
