import React, { createContext, useContext, useState } from "react";
const authContext = createContext();
export const useAuth = () => {
  const values = {};
  return useContext(authContext);
};
const AuthContextProvider = ({ children }) => {
  // const handleAuth = () => {
  //   document.body.style.overflow = "hidden";
  // };
  const [auth, setAuth] = useState(false);




  const values = { auth, setAuth };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
