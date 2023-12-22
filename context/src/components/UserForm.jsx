import React, { useContext } from "react";
import { UserContext } from "../useContext/UserProvider";
import UserData from "./UserData";

export const UserForm = () => {
  const { inputValues, handleChange, handleSubmit } = useContext(UserContext);

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name:{" "}
            <input
              type="text"
              value={inputValues.name}
              onChange={handleChange}
              name="name"
              id="name"
            />
          </label>
          <label htmlFor="email">
            Email:{" "}
            <input
              type="email"
              value={inputValues.email}
              name="email"
              id="email"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Password:{" "}
            <input
              type="password"
              value={inputValues.password}
              name="password"
              id="password"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="gender">
            gender:{" "}
            <input
              type="gender"
              value={inputValues.gender}
              name="gender"
              id="gender"
              onChange={handleChange}
            />
          </label>
          <button id="BtnSub">Submit</button>
        </form>
      </div>
      <div className="userdata">
        <UserData />
      </div>
    </div>
  );
};
