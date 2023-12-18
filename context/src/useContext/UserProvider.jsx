import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
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
