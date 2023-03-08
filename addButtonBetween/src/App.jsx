import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(["a", "b", "c"]);

  function handleChange(item, index) {
    setCount((prevCount) => {
      return prevCount.map((x, idx) => {
        return index === idx ? item : x;
      });
    });
  }

  function handleClick(index) {
    count.splice(index + 1, 0, "_");
    setCount([...count]);
  }

  return (
    <div className="App">
      <div className="content">
        {count.map((item, index) => (
          <div className="cell-click" key={index}>
            <div className="cell">
              <input
                type="text"
                value={item}
                onChange={(e) => handleChange(e.target.value, index)}
              />
            </div>
            <div className="clicker" onClick={() => handleClick(index)}>
              +
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
