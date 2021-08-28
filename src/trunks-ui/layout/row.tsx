import React, { FC, ReactNode } from "react";
import './layout.css';

interface Props {
  wrap?: boolean;
  children?: ReactNode;
  grow?: boolean;
  space?: boolean;
}

const Row: FC<Props> = ({ grow, wrap, children, space }) => {
  return (
    <>
      <div className={`flex-row wrap-${wrap} grow-${grow} space-${space}`}>{children}</div>
    </>
  );
};

export default Row;
