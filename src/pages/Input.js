import React, { useState } from "react";

const Input = () => {
  const [txt, setTxt] = useState("");
  const onChange = (e) => {
    setTxt(e.target.value);
  };

  return (
    <div>
      <input type="text" value={txt} onChange={onChange}></input>
      <br></br>
      <p>{txt}</p>
    </div>
  );
};

export default Input;
