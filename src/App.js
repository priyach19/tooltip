import { useState } from "react";
// import Tooltips from "./Tooltips";
import { Tooltip } from "react-tooltip";
import "./App.css";
function App() {
  const [position, setPosition] = useState("top");
  const [flag, setFlag] = useState(false);

  //function called when clicked positions buttons
  function handleClick(e) {
    // setting position of tooltip
    setPosition((prevPosition) => {
      return (prevPosition = e.target.value);
    });
  }
  //  when hover over button setting value of flag true
  function handleMouseIn() {
    setFlag(true);
  }

  function handleMouseOut() {
    setFlag(false);
  }
  // based on flag setting visibility of tooltip
  const visibility = { display: flag ? "block" : "none" };
  return (
    <div className="main-container">
      <h3>Select position for the tooltip here!!!</h3>
      <div className="container-position">
        <button onClick={handleClick} value="left">
          Left
        </button>
        <button onClick={handleClick} value="right">
          Right
        </button>
        <button onClick={handleClick} value="bottom">
          Bottom
        </button>
        <button onClick={handleClick} value="top">
          Top
        </button>
      </div>
      <div className="container-button">
        
          <button data-tooltip-id="my-tooltip" onMouseOver={handleMouseIn} onMouseLeave={handleMouseOut}>
            Hover Over Me!
          </button>
          <Tooltip
          id="my-tooltip"
          place={position}
          style={{ visibility }}
          content="Thanks for hovering"
        />
       
     
      </div>
    </div>
  );
}

export default App;
