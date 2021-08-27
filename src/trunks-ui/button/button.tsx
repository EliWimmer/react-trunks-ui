import React, { useState, FC, useEffect, Component } from "react";
import { ReactElement } from "react";
import { ReactNode } from "react";
import "./button.css";

interface Props {
  type?: "default" | "primary" | "danger" | "dashed" | "text";
  size?:  "default" | "large" | "small";
  disabled?: boolean;
  children: ReactNode;
  icon?: ReactElement;
}

const Button: FC<Props> = ({
  type,
  size,
  disabled,
  children,
  icon,
}) => {
  const [clickUp, setClickUp] = useState<boolean>(false);
  const [clickDown, setClickDown] = useState<boolean>(false);

useEffect(() => {
  onmouseup = (e) => {
    clickDown &&
    setClickDown(false);
  }
}, [clickUp, clickDown])

  return (
    <button
    className={
      `trunks-button ${type} ${size} disabled-${disabled} ${clickUp} ${clickDown} icon`
    }
    onMouseDown={() => !disabled && setClickDown(true)}
    onMouseUp={() => !disabled && setClickUp(true)}
    onAnimationEnd={() => setClickUp(false)}
    clickUp-={clickUp.toString()}
    clickDown-={clickDown.toString()}
    >
     <span className="button-icon">{icon}</span> 
    <span className="button-label">{children}</span>
  </button>
  )
}

export default Button;