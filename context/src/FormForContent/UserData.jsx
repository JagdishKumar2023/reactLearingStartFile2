import React, { createContext, useState } from "react";

export const userFormData = createContext();

export const UserData = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [userDataSave, setUserDataSave] = useState([]);
};
