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

export const SignupPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;

    dispatch({ type: "inputValues", payload: { value, name } });
  };

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "submit", payload: state.userValue });
  };

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={state.userValue.name}
            name="name"
            onChange={(e) => handleChange(e)}
            placeholder="enter name"
          />
          <input
            type="email"
            name="email"
            value={state.userValue.email}
            onChange={(e) => handleChange(e)}
            placeholder="enter email"
          />

          <input
            type="password"
            value={state.userValue.password}
            onChange={(e) => handleChange(e)}
            name="password"
            placeholder="enter password"
          />
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};
