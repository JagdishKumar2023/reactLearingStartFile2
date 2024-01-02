import React, { useReducer } from "react";

const mainFunctionreducer = (action, state) => {
  switch (type) {
    case "inputValue": {
    }
  }
};

const initialState = {
  inputValue: {
    name: "",
    email: "",
    password: "",
    gender: "",
  },
};

export const Practic5 = () => {
  const [dispatch, state] = useReducer(mainFunctionreducer, initialState);

  return (
    <div>
      <form>
        <input type="text" placeholder="enter your name" />
        <input type="email" placeholder="enter your email" />
        <input type="password" placeholder="enter password" />
        <input type="gender" placeholder="enter your gender" />
        <button>Submit</button>
      </form>
    </div>
  );
};
