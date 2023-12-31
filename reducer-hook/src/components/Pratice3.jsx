import React, { useReducer } from "react";

const initialState = {
  inputValue: {
    name: "",
    email: "",
    gender: "",
    password: "",
  },

  userData: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "inputValue": {
      return {
        ...state,
        inputValue: { ...state.inputValue, [payload.name]: payload.value },
      };
    }

    case "submit": {
      return {
        ...state,
        userData: { ...state.userData, payload },
      };
    }

    default: {
      return state;
    }
  }
};

export const Pratice3 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "inputValue", payload: { name, value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "submit", payload: state.inputValue });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={state.inputValue.name}
          placeholder="enter your name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={state.inputValue.email}
          placeholder="enter your email"
          onChange={handleChange}
        />
        <input
          type="gender"
          name="gender"
          value={state.inputValue.gender}
          placeholder="enter your gender"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={state.inputValue.password}
          placeholder="enter password"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
