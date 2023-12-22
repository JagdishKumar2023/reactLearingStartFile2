import react, { createContext, useState } from "react";

export const UserContext = createContext();

export const Practice = ({ children }) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  const [userData, setUserData] = useState([]);

  const handleChange = (e) => {
    let { value, name } = e.target;

    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prev) => [...prev, inputValues]);
    setInputValues({
      name: "",
      email: "",
      password: "",
      gender: "",
    });
  };

  return (
    <UserContext.Provider
      value={{ inputValues, handleChange, handleSubmit, userData }}
    >
      {children}
    </UserContext.Provider>
  );
};
