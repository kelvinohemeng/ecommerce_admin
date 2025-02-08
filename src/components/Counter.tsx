"use client";

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Greeting from Dev Server");
  return (
    <div>
      <div>{count}</div>
    </div>
  );
};
