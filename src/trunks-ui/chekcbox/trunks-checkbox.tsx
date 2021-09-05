import React, { FC, ReactNode, useState, useEffect, useRef, Ref } from 'react';
import './trunks-checkbox.sass';
interface Props {
  children?: ReactNode;
  labelType?: "default" | "faded" | "strike" | "strikefaded";
  defaultState?: boolean;
  type?: "checkbox" | "switch" | 'tile';
  size?: "default" | "small";
  disabled?: boolean;
  checked?: boolean;
  icon?: ReactNode;
  onClick?: (isChecked:boolean) => void 
}

export const Checkbox: FC<Props> = ({ children, type="checkbox", icon, checked, onClick, disabled, defaultState, size="default", labelType="default" }) => {
  
  const [isChecked, setIsChecked] = useState(checked === undefined ? defaultState : checked);
  const [isPressed, setIsPressed] = useState(false)
  function handleClick() {
    if(!disabled && checked === undefined){ isChecked ? setIsChecked(false) : setIsChecked(true)} else {setIsChecked(checked)}
    setIsPressed(false)
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
    {type === "tile" &&
          <div
          onMouseUp={handleClick}
          onMouseDown={() => setIsPressed(true)}
          mousePress-={isPressed.toString()}
          className={`tilecb-container ${isChecked} ${labelType} ${size} ${disabled && 'disabled'}`}>
            <span className="tilecb-icon">
            {icon}
          </span>
          <input type='checkbox' />
        </div>
    }
    </>
  );
};
