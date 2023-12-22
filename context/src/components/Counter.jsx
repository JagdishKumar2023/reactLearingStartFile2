import React, { useContext } from "react";
import { CounterContext } from "../useContext/CounterProvider";
import { UserContext } from "../useContext/UserProvider";

const Counter = () => {
  const { count, handleIncreaseCount, handleDecreaseCount } =
    useContext(CounterContext);

  const { userData } = useContext(UserContext);

  return (
    <div id="CounterAddMinus">
      <h1> Counter: {userData.length}</h1>
      {/* <button onClick={handleIncreaseCount}>Increase</button>
      <button onClick={handleDecreaseCount}>Decrease</button> */}
    </div>
  );
};

export default Counter;
