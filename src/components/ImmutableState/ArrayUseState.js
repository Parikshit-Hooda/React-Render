import React, { useState } from "react";

const initArr = ["Bruce", "Clark"];

export const ArrayUseState = () => {
  const [arr, setArr] = useState(initArr);

  const handleClick = () => {
    console.log("old state: " + JSON.stringify(arr));

    const newArr = [...arr, "Dictator"];
    setArr(newArr);
    console.log("new state: " + JSON.stringify(arr));
  };

  console.log("ArrayUseState render");

  return (
    <div>
      <button onClick={handleClick}>Modify array</button>
    </div>
  );
};
