import React, { useContext } from "react";
import { CounterContext } from "../useContext/CounterProvider";

const HelloWorld = () => {
  const { count, handleIncreaseCount } = useContext(CounterContext);

  return <div>Hello World : {count}</div>;
};

export default HelloWorld;
