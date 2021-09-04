import React, { FC, ReactNode, useState, useEffect } from 'react';
import './trunks-checkbox.sass';
interface Props {
  children?: ReactNode;
}

export const Checkbox: FC<Props> = ({ children }) => {
  const [checked, setChecked] = useState(false);

  function handleClick() {
    checked ? setChecked(false) : setChecked(true);
    console.log(checked);
  }

  return (
    <>
      <label
        onMouseUp={handleClick}
        checked-={checked.toString()}
        className={`container ${checked}`}>
        <span className='checkbox'>
          <span
            checked-={checked.toString()}
            className={`checkmark ${checked}`}
          />
        </span>

        {children}
        <input type='checkbox' checked-={checked.toString()} />
      </label>
    </>
  );
};
