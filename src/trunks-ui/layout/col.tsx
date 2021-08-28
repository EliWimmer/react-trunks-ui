import React, { FC, ReactNode } from "react";
import './layout.css';

interface Props {
    grow?: number;
    children?: ReactNode;
}

const Col: FC<Props> = ({ children, grow }) => {
  return (
    <>
      <div className={`flex-col grow-${grow}`}>{children}</div>
    </>
  );
};

export default Col;
