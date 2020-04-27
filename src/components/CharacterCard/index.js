import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card" onClick={() => props.handleClick(props.id)}>
      <div className="img-container">
        <img src={props.image} alt={props.name} />
      </div>
    </div>
  );
}

export default CharacterCard;
