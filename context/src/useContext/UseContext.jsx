import React, { createContext, useState } from "react";

export const useFormContext = createContext();

export const UseContext = ({ children }) => {
  const [inputValues, setInputValue] = useState({
    name: "",
    email: "",
  });

  const [userData, setUserData] = useState([]);

  return (
    <useFormContext.Provider value={(userData, inputValues)}>
      {children}
    </useFormContext.Provider>
  );
};

export default UseContext;
