import React, { useReducer } from "react";

const initialState = {
  inputValue: {
    name: "",
    email: "",
  },

  userData: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "inputValues": {
      return {
        ...state,
        inputValue: { ...state.inputValue, [payload.name]: payload.value },
      };
    }

    case "submit": {
      return {
        ...state,
        userData: [...state.userData, payload],
      };
    }

    default: {
      return state;
    }
  }
};

export const SignupPractice = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "inputValues", payload: { name, value } });
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
          name="email"
          value={state.inputValue.email}
          placeholder="enter you  email"
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
};
