import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleIncreaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecreaseCount = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <CounterContext.Provider
      value={{ count, handleIncreaseCount, handleDecreaseCount }}
    >
      {children}
    </CounterContext.Provider>
  );
};
