import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "increase": {
      return { count: state.count++ };
    }

    case "decrease": {
      return { count: state.count-- };
    }
    default: {
      return state;
    }
  }
};

export const Practice = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrease = () => {
    dispatch({ type: "increase" });
  };
  const handleDecrease = () => {
    dispatch({ type: "decrease" });
  };

  return (
    <div>
      {state.count}
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </div>
  );
};
