import { useState } from "react";
import "./box.styles.css";

const Box = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
    const number = e.target.value.charAt(e.target.value.length - 1);
    // console.log(number);
    if (!isNaN(number) && number !== " " && number !== "") {
      alert(`You entered a ${number}`);
    }
  };
  return (
    <div className="input-field">
      <input
        autoFocus
        type="text"
        value={input}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Box;
