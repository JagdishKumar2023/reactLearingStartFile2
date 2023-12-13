import React, { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const [likes, setLikes] = useState(0);

  useEffect(() => {
    console.log("hi");
  }, [likes]);

  //in case of blanck dependency array only when page load, hi will print

  return (
    <div>
      <div className="counter">
        <h1>{count}</h1>
        <h2>Likes - {likes}</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
        <button onClick={() => setLikes((prev) => prev + 1)}>👍</button>
      </div>
    </div>
  );
};
