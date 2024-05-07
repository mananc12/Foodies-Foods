import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userFirstName, setUserFirstName] = useState("");
  const [userProfileData, setUserProfileData] = useState("");

  const loggedInUserFirstName = (name) => {
    setUserFirstName(name);
  };
  const loggedInUserDetails = (id) => {
    setUserProfileData(id);
    // console.log(id);
  };
  const storeTokenInLS = (userToken) => {
    //By updating the state, you trigger a re-render, and during the re-render,
    //the components that rely on the token state will reflect the updated value.
    setToken(userToken);

    return localStorage.setItem("token", userToken);
  };

  let isLoggedIn = !!token;

  //logout logic
  const logoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        loggedInUserFirstName,
        userFirstName,
        loggedInUserDetails,
        userProfileData,
        isLoggedIn,
        storeTokenInLS,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
