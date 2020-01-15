import React from "react";
import "./note.css";
import { Header as ThemeHeader, jsx, useColorMode, Styled } from "theme-ui";

export default props => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`);
  };

  if (props.type === `note`)
    return (
      <div className={`alert alert-${props.type} ${colorMode}Theme`}>
        <b>Note: </b>
        {props.children}
      </div>
    );

  if (props.type === `command`) return <div className={`alert alert-${props.type} ${colorMode}Theme`}>{props.children}</div>;
  if (props.type === `advanced`)
    return (
      <div className={`alert alert-${props.type} ${colorMode}Theme`}>
        <b>Advanced: </b>
        {props.children}
      </div>
    );

  return <div />;
};
