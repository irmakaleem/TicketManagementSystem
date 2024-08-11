import React, { useState } from "react";

const Test = () => {
  // dobara kro
  const [name, setName] = useState("irma");
  const [age, setAge] = useState(2);
  const changeName = () => {
    if (name === "irma") {
      setName("irmaa");
    } else {
      setName("irma");
    }
  };
  // sahi hai isko map krwaskti?haan
  // ye tumne ek state nhi banayi hum iske data ko state may lekr update bhi krwaskte agr aese hoga to it is not changeable it is constant .. state banani ayein ye state hai?

  const [arrayObject, setarrayObject] = useState([
    { name: "irma", age: 2, gender: "female" },
    { name: "irmaa", age: 3, gender: "male" },
  ]);
  // banaskti?
  return (
    <>
      {/* map ke function hai map() jo kisi bhi array ke sath use krte in this case array name is arrayObject so arrayObject.map() map ke function ke andar ek callback function ata (arrow function) us arrow function may parameters aate arrow method bhi alag alag types ke use krte agr curly bracket use krhi to tumhe return ka keyword use krna hoga*/}
      {/* error ku arha btaskti? kiu k ye aik container me nhi good hai chalo han kiu k index nhi lagaya kahan? yaha kahi mere or tumare nam alag index me ana chahiye mene parha tha par yad nhi kaha lage ga zaroori to nhi index hi koi bhi unqiue cheez leskte abhi unique name hain wese mera name repeat bhi hoskta isliye hum index istemaal krte lekn srf wahan jahan koi unique value nhi*/}
      {/* key use krte uske andar unique cheez in this case index is unique kunbke index to 0 1 2 3 unique hi hoga har element ka */}
      {arrayObject.map((object, index) => {
        return (
          <p key={index}>
            name: {object.name} age: {object.age}
          </p>
        );
      })}

      {/* <div>
        my name is {name}
        my age is {age}
      </div>
      <button
        onClick={() => {
          setName(name === "irma" ? "hhh" : "irma");
          setAge(age + 1);
        }}
      >
        change
      </button> */}
      {/* thora sensible krte isse array of objects aate na banana? hannao banao */}
      {/*       
       <button onClick={changeName}>change name</button> */}
    </>
  );
};

export default Test;
