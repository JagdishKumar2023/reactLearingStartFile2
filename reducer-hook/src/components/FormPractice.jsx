import React, { useReducer } from "react";

const initialState = {
  userValue: {
    name: "",
    email: "",
    password: "",
  },

  userData: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "inputValues": {
      return {
        ...state,
        userValue: { ...state.userValue, [payload.name]: payload.value },
      };
    }

    case "submit": {
      return {
        ...state,
        userData: [...state.userData, payload],
      };
    }
  }
};

export const FormPractice = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;

    dispatch({ type: "inputValues", payload: value, name });
  };

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "submit", payload: state.userValue });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          name="email"
          placeholder="enter you email"
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
};
