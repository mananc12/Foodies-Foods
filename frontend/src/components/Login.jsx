import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { storeTokenInLS, loggedInUserFirstName, loggedInUserDetails } =
    useAuth();

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      // console.log(res);
      if (res.status === 200) {
        // Successful login
        storeTokenInLS(res.data.token);
        loggedInUserFirstName(res.data.userFirstName);
        loggedInUserDetails(res.data.userID);
        // console.log(res.data.userID);
        setEmail("");
        setPassword("");
        toast.success(res.data.message);
        navigate("/");
      } else {
        // Unsuccessful login, display an error message to the user
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      // Display an error message to the user
      error.response.data.extraDetails
        ? error.response.data.extraDetails.map((i) => toast.error(i))
        : toast.error(error.response.data.message);
    }
  };

  return (
    <div className="login-container flex flex-col justify-center items-center h-[400px] w-[300px] md:w-[600px] m-auto p-5 bg-gray-800 text-white rounded-xl shadow-md">
      <h1 className="font-bold text-xl mb-5">Login to Your Account</h1>
      <form
        onSubmit={handleClick}
        className="login-form flex justify-center w-[100%] flex-col items-center gap-4"
      >
        <div className="w-[80%]">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[100%] p-2 border border-[#ccc] rounded-md mb-3 text-black"
          />
        </div>
        <div className="w-[80%]">
          <label htmlFor="password" className="block mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[100%] p-2 border border-[#ccc] rounded-md mb-3 text-black"
          />
        </div>
        <button
          type="submit"
          className="w-32 font-bold bg-white text-gray-800 p-2 rounded cursor-pointer transition-[0.3s] border-solid border-[2px] hover:bg-gray-800 hover:border-[#ddd] hover:text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};
