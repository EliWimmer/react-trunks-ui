import React, { ReactNode, useState, FC } from 'react';
import './trunks-input.sass';

interface Props {}

export const Input: FC<Props> = ({}) => {
  return (
    <>
      <label className='input-container'>
        <span className='input-label'>This is a label</span>
        <input className='trunks-input' />
      </label>
    </>
  );
};
