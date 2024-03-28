import React, { useContext } from "react";
import { useFormContext } from "../useContext/UseContext";

const Form = () => {
  const { userData, inputValue } = useContext(useFormContext);

  return (
    <div className="UseContext">
      <input
        type="text"
        placeholder="Enter you name "
        value={inputValue.name}
      />
      <input
        type="email"
        placeholder="Enter you email"
        value={inputValue.email}
      />
    </div>
  );
};

export default Form;
