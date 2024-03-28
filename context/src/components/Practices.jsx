import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const Practice = ({ children }) => {
  const [inputValue, setInputValues] = useState({
    name: "",
    eamil: "",
    password: "",
    gender: "",
  });

  const [userData, setUserData] = useState([]);

  const handleChange = (e) => {
    let { value, name } = e.target;

    setInputValues((prev) => ({ ...prev, [name]: value }));
  };
};
