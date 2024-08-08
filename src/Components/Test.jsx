import React from "react";

const Test = () => {
  const name = "irma";
  const names = ["irma", "skms", "sjndj"];
  const loggedIn = true;
  return (
    <>
      <div>my name is {name}</div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn ? <h1>hello</h1> : " "}
    </>
  );
};

export default Test;
