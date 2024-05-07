import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import "./Registration.css"; // Import your CSS file

export const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { storeTokenInLS, loggedInUserFirstName, loggedInUserDetails } =
    useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/register", {
        firstName,
        lastName,
        email,
        phone,
        password,
        confirmPassword,
      });
      // console.log(res.data);
      // console.log(res.config.data);
      // if (res.status === 200) {
      storeTokenInLS(res.data.token);
      console.log(res);
      loggedInUserFirstName(res.data.userFirstName);
      loggedInUserDetails(res.data.userId);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
      toast.success(res.data.message);
      navigate("/");

      // }
    } catch (error) {
      // console.log(error);
      // console.log(error.response.data.extraDetails);
      error.response.data.extraDetails
        ? error.response.data.extraDetails.map((i) => toast.error(i))
        : toast.error(error.response.data.message);
      // toast.error(error.response.data.extraDetails)
    }
  };

  return (
    <div className="registration-container flex flex-col justify-center items-center w-[300px] md:w-[600px] m-auto mt-10 p-5 bg-gray-800 text-[#fff] rounded-xl shadow-[0 0 10px rgba(0, 0, 0, 0.1)] ">
      <h1 className="font-bold mb-5 text-xl">Register for an Account</h1>
      <form
        onSubmit={handleSubmit}
        className="registration-form flex justify-center w-[100%] flex-col items-center gap-[10px]"
      >
        <div className="w-[80%]">
          <label htmlFor="firstName" className="block mb-[5px]">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-[100%] p-2 border-solid border-[1px] border-[#ccc] rounded-md box-border mb-3 text-black"
          />
        </div>
        <div className="w-[80%]">
          <label htmlFor="lastName" className="block mb-[5px]">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-[100%] p-2 border-solid border-[1px] border-[#ccc] rounded-md box-border mb-3 text-black"
          />
        </div>
        <div className="w-[80%]">
          <label htmlFor="email" className="block mb-[5px]">
            Phone Number:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-[100%] p-2 border-solid border-[1px] border-[#ccc] rounded-md box-border mb-3 text-black"
          />
        </div>
        <div className="w-[80%]">
          <label htmlFor="email" className="block mb-[5px]">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[100%] p-2 border-solid border-[1px] border-[#ccc] rounded-md box-border mb-3 text-black"
          />
        </div>
        <div className="w-[80%]">
          <label htmlFor="password" className="block mb-[5px]">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[100%] p-2 border-solid border-[1px] border-[#ccc] rounded-md box-border mb-3 text-black"
          />
        </div>
        <div className="w-[80%]">
          <label htmlFor="confirmPassword" className="block mb-[5px]">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-[100%] p-2 border-solid border-[1px] border-[#ccc] rounded-md box-border mb-3 text-black"
          />
        </div>
        <button
          type="submit"
          className="w-32 font-bold bg-white text-gray-800 p-2 rounded cursor-pointer transition-[0.3s] border-solid border-[2px] hover:bg-gray-800 hover:border-[#ddd] hover:text-white"
        >
          Register
        </button>
      </form>
    </div>
  );
};
