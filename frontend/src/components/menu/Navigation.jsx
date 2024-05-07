import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { useAuth } from "../../store/auth";

const variants = {
  open: {
    display: "block",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    display: "none",
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => {
  const { isLoggedIn, userFirstName, userProfileData } = useAuth();

  return (
    <motion.ul
      className="nav-ul m-0 p-[25px] absolute top-[40px] w-[230px]"
      variants={variants}
    >
      <MenuItem i={0} icon={<HomeOutlinedIcon />} text="Home" />
      {isLoggedIn ? (
        <>
          <Link to={`/profile/${userProfileData}`}>
            <MenuItem i={1} icon={<LoginOutlinedIcon />} text={userFirstName}/>
          </Link>
          <Link to="/logout">
            <MenuItem i={2} icon={<HowToRegOutlinedIcon />} text="Logout" />
          </Link>
        </>
      ) : (
        <>
          <Link to="/register">
            <MenuItem i={1} icon={<LoginOutlinedIcon />} text="Register" />
          </Link>
          <Link to="/login">
            <MenuItem i={2} icon={<HowToRegOutlinedIcon />} text="Login" />
          </Link>
        </>
      )}
    </motion.ul>
  );
};


const itemIds = [0, 1, 2, 3, 4];
