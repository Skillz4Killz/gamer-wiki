import React from "react";
import "./note.css";

export default props => {
  return <img src={`images/${props.name}`}></img>;
};
