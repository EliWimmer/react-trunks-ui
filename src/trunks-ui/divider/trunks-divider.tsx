import React, { ReactNode, useState, FC } from 'react';
import './trunks-divider.sass';

interface Props {
    children?: ReactNode;
  }
  
  export const Divider: FC<Props> = ({ children }) => {
   
    return (
      <>
        <div className="trunks-divider"></div>
      </>
    );
  };