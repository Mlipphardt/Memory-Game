import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav>
      <div className="nav-item">Deep Sea Memory Challenge</div>
      <div className="nav-item">
        <span className="score-item">Score: {props.score}</span>
        <span className="score-item">Top Score: {props.topScore}</span>
      </div>
    </nav>
  );
}

export default Navbar;
