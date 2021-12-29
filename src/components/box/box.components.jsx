import { useState } from "react";
import "./box.styles.css";

const Box = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleKeyPress = (e) => {
    const number = e.charCode - 48;
    if (number >= 0 && number < 10) {
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
        onKeyPress={handleKeyPress}
      ></input>
    </div>
  );
};

export default Box;
