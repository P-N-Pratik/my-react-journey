import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from "react";
function App() {
  const [color, setColor] = useState("pink");

  // function changeColor()
  // {
  //   setColor()

  // }
  return (
    <div className="maindiv" style={{ backgroundColor: color }}>
      <div className="App">
        <div className="navbartype">
          <button className="purple ofa" onClick={() => setColor("purple")}>
            Purple
          </button>
          <button className="red ofa" onClick={() => setColor("red")}>
            Red
          </button>
          <button className="green ofa" onClick={() => setColor("green")}>
            Green
          </button>
          <button className="blue ofa" onClick={() => setColor("blue")}>
            Blue
          </button>
          <button className="yellow ofa" onClick={() => setColor("yellow")}>
            Yellow
          </button>
          <button className="pink ofa" onClick={() => setColor("pink")}>
            Pink
          </button>
          <button className="black ofa" onClick={() => setColor("black")}>
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
