import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");  

  const handleClick = (value) => {
    if (value === "C") {
      setInput(""); 
    } else if (value === "=") {
      try {
        setInput(eval(input).toString()); 
      } catch (error) {
        setInput("Error"); 
      }
    } else {
      setInput(input + value); 
    }
  };

  return (
    <div
      style={{
        width: "300px",
        margin: "50px auto",
        border: "2px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          backgroundColor: "#f0f0f0",
          fontSize: "2rem",
          padding: "15px",
          textAlign: "right",
          borderBottom: "2px solid #ccc",
        }}
      >
        {input || "0"}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            style={{
              padding: "20px",
              fontSize: "1.5rem",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            {btn}
          </button>
        ))}
        <button
          onClick={() => handleClick("C")}
          style={{
            padding: "20px",
            fontSize: "1.5rem",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator; 
