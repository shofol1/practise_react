import React, { useState } from "react";

export default function FunctionCom(props) {
  const [fruits, setFruits] = useState([
    { name: "Mango", price: 200 },
    { name: "Apple", price: 300 },
  ]);

  const handleClick = () => {
    setFruits([
      { name: "Lichu", price: 200 },
      { name: "Apple", price: 300 },
    ]);
  };
  return (
    <div>
      hello {props.shofol} and {props.shanto}
      {fruits.map((f) => {
        return (
          <>
            <h1>{f.name}</h1>
            <h1>{f.price}</h1>
          </>
        );
      })}
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
