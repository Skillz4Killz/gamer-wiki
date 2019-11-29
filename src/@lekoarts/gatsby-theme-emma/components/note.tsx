import React from "react";
import "./note.css";

export default props => {
  if (props.type === `note`)
    return (
      <div className={`alert alert-${props.type}`}>
        <b>Note: </b>
        {props.children}
      </div>
    );

  if (props.type === `command`) return <div className={`alert alert-${props.type}`}>{props.children}</div>;
  if (props.type === `advanced`)
    return (
      <div className={`alert alert-${props.type}`}>
        <b>Advanced: </b>
        {props.children}
      </div>
    );

  return <div />;
};
