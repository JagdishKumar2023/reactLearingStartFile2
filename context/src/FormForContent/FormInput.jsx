import React from "react";

export const FormInput = () => {
  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="enter your name" />
        <input type="email" name="email" placeholder="enter your email" />
        <input type="password" name="password" placeholder="enter password" />
        <button>Submit</button>
      </form>
    </div>
  );
};
