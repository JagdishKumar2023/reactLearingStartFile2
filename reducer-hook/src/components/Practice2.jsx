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
        inputValue: { ...state, [payload.name]: payload.value },
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

  const handleSubmit = () => {
    // e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter name"
          name="name"
          value={state.value.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="enter email"
          name="email"
          value={state.value.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          value={state.value.password}
          onChange={handleChange}
        />
        <input
          type="gender"
          placeholder="enter gender"
          name="gender"
          value={state.value.gender}
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
};
