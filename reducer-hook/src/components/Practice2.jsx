import React, { useReducer } from "react";

const initialState = {
  inputValue: {
    name: "",
    email: "",
    password: "",
    gender: "",
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

export const Practice2 = () => {
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
          placeholder="enter name"
          name="name"
          value={state.inputValue.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="enter email"
          name="email"
          value={state.inputValue.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          value={state.inputValue.password}
          onChange={handleChange}
        />
        <input
          type="gender"
          placeholder="enter gender"
          name="gender"
          value={state.inputValue.gender}
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
};
