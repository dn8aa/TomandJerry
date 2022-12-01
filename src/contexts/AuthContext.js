import React, { useState } from "react";

export const authContext = React.createContext();
export const useAuth = () => {
  return React.useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  const [email, setEmail] = useState("");

  const values = { auth, setAuth };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
