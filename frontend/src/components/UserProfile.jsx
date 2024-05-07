import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import MyRecipes from "./MyRecipes";

export const UserProfile = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [email, setEmail] = useState(user.email || "");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(user.phone || "");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { userProfileData } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/profile/${userProfileData}`
        );
        setUser(response.data.findUser);
        // console.log(response.data.findUser);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [userProfileData]);

  useEffect(() => {
    setFirstName(user.firstName || "");
    setLastName(user.lastName || "");
    setPhone(user.phone || "");
    setEmail(user.email || "");
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the user is updating the password
    const isUpdatingPassword = password && confirmPassword;

    try {
      const res = await axios.patch(
        `http://localhost:5000/api/profile/${userProfileData}`,
        {
          firstName,
          lastName,
          email,
          phone,
          ...(isUpdatingPassword && { password, confirmPassword }),
        }
      );

      toast.success("Details updated!");
    } catch (error) {
      error.response.data.extraDetails
        ? error.response.data.extraDetails.map((i) => toast.error(i))
        : toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col">
      <MyRecipes />

      {/* ---------------------------------horizontal-line-------------------------------------------------- */}

      <div className="flex mt-8 mb-20 pt-20 pb-5 justify-center text-center items-center">
        <div className="w-24 border-dotted border-black border-t-8"></div>
      </div>

      {/* -------------------------------------------------------------------------------------------------- */}
      <div className="registration-container flex flex-col justify-center items-center w-[300px] md:w-[600px] m-auto mt-10 p-5 bg-gray-800 text-[#fff] rounded-xl shadow-[0 0 10px rgba(0, 0, 0, 0.1)] ">
        <h1 className="font-bold mb-5 text-xl">Update Your Account Details</h1>
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
            <label htmlFor="phone" className="block mb-[5px]">
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};
