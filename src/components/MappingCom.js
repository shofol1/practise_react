import React from "react";

export default function MappingCom() {
  const names = [
    { name: "shofol", age: 24, height: 5.7 },
    { name: "shanto", age: 24, height: 5.9 },
    { name: "shanto", age: 24, height: 5.7 },
  ];

  const items = names.map((item, idx) => {
    return (
      <div
        key={idx}
        style={{ border: "1px solid red", marginBottom: "10px" }}
        className="p-4"
      >
        <h3>Name: {item.name}</h3>
        <h3>Age: {item.age}</h3>
        <h3>Height: {item.height}</h3>
        <button className="btn btn-secondary me-2">edit</button>
        <button className="btn btn-danger me-2">delete</button>
      </div>
    );
  });
  return <div>{items}</div>;
}
