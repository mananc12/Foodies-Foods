import React from "react";
import Example from "./menu/Example";
import { Link } from "react-router-dom";
// import Drop from "./dropdown/App";
import { useAuth } from "../store/auth";

const NavBar = () => {
  const { isLoggedIn, userFirstName, userProfileData } = useAuth();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex max-[770px]:justify-between max-[770px]:px-5 justify-around bg-gray-200 items-center w-full h-24">
      <div className="menu min-[770px]:hidden">
        <Example />
      </div>
      <div className="font-bold text-2xl md:text-3xl lg:text-4xl flex flex-col justify-start items-center w-fit h-10 mb-4">
        Foodies' Foods
        <span className="text-sm">Discover Delicious Recipes</span>
      </div>
      <div className="nav-bar flex font-bold flex-row justify-around md:w-100 gap-2 max-[1175px]:gap-5 min-[1175px]:gap-12 max-md:hidden lg:mr-10 items-center max-[1266px]:text-sm">
        <div className="cursor-pointer" onClick={() => scrollToSection("home")}>Home</div>

        <div
          className="w-fit cursor-pointer"
          onClick={() => scrollToSection("allRecipe")}
        >
          Recipes
        </div>

        {isLoggedIn ? (
          <>
            <Link to={`/profile/${userProfileData}`}>
              <div className="text-[#8A2BE2]">{userFirstName}</div>
            </Link>
            <Link to="/logout">
              <div>Logout</div>
            </Link>
          </>
        ) : (
          <>
            <Link to="/registration">
              <div>Register</div>
            </Link>

            <Link to="/login">
              <div>Login</div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
