import React, { useState, FC, useEffect } from "react";
import { ReactNode } from "react";
import "./button.css";

interface Props {
  type?: string;
  size?: string;
  children: ReactNode;
}

const Button: FC<Props> = ({
  type,
  size,
  children,
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
      `trunks-button ${type} ${size} ${clickUp} ${clickDown}`
    }
    onMouseDown={() => type !== "disabled" && setClickDown(true)}
    onMouseUp={() => type !== "disabled" && setClickUp(true)}
    onAnimationEnd={() => setClickUp(false)}
    clickUp-={clickUp.toString()}
    clickDown-={clickDown.toString()}
    >
    {children}
  </button>
  )
}

export default Button;