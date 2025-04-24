import React, { useState } from "react";
import "./Calculator.css";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (err) {
      setInput("Error");
    }
  };

  const clear = () => setInput("");

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {"123+456-789*0./".split("").map((char) => (
          <button key={char} onClick={() => handleClick(char)}>
            {char}
          </button>
        ))}
        <button onClick={calculate}>=</button>
        <button onClick={clear}>C</button>
      </div>
    </div>
  );
}
