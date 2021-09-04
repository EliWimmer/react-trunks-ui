import React, { FC, ReactNode, useState, useEffect, useRef, Ref } from 'react';
import './trunks-checkbox.sass';
interface Props {
  children?: ReactNode;
  labelType?: "default" | "faded" | "strike" | "strikefaded";
  defaultState?: boolean;
  type?: "checkbox" | "switch";
  size?: "default" | "small";
  disabled?: boolean;
  checked?: boolean;
  onClick?: (isChecked:boolean) => void 
}

export const Checkbox: FC<Props> = ({ children, type="checkbox", checked, onClick, disabled, defaultState, size="default", labelType="default" }) => {
  
  const [isChecked, setIsChecked] = useState(checked === undefined ? defaultState : checked);

  function handleClick() {
    if(!disabled && checked === undefined){ isChecked ? setIsChecked(false) : setIsChecked(true)} else {setIsChecked(checked)}
  }



  return (
    <>
    {type === "checkbox" &&
          <div
          onMouseUp={handleClick}
          className={`checkbox-container ${isChecked} ${labelType}`}
          onClick={() => isChecked !== undefined && onClick !== undefined && onClick(isChecked)}
          >
          <span className='checkbox'>
            <span
              className='checkmark'
            ></span>
          </span>
          <span className="checkbox-label">
            {children}
          </span>
          <input value={isChecked ? isChecked.toString() : 'false'} type='checkbox' />
        </div>
    }
    {type === "switch" &&
          <div
          onMouseUp={handleClick}
          className={`switch-container ${isChecked} ${labelType} ${size} ${disabled && 'disabled'}`}>
            <span className="switch-label">
            {children}
          </span>
          <span className='switch'>
            <span
              className='switchmark'
            ></span>
          </span>
          
          <input type='checkbox' />
        </div>
    }

    </>
  );
};
