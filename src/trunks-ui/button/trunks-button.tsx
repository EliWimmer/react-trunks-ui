import React, { useState, FC, useEffect, ReactElement, ReactNode } from 'react';
import './trunks-button.sass';

interface Props {
  type?: 'default' | 'primary' | 'dashed' | 'textonly' | 'link';
  size?: 'default' | 'large' | 'small';
  mod?: 'disabled' | 'warn' | 'danger';
  shape?: 'round' | 'square' | 'squircle';
  children?: ReactNode;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  icon?: ReactElement;
  fill?: boolean;
  labelLeft?: string | ReactElement;
  labelRight?: string | ReactElement;
  onClick?: () => void;
}

export const Button: FC<Props> = ({
  type,
  size,
  mod,
  shape,
  children,
  iconLeft,
  iconRight,
  icon,
  fill,
  onClick,
  labelLeft,
  labelRight,
}) => {
  // clickUp & clickDown states to handle animations and css stylings

  const [clickUp, setClickUp] = useState<boolean>(false);
  const [clickDown, setClickDown] = useState<boolean>(false);

  // Sets clickDOwn to false no matter where on the page the mouse is released.
  // Prevents the button from getting stuck down.
  useEffect(() => {
    onmouseup = (e) => {
      clickDown && setClickDown(false);
    };
  }, [clickUp, clickDown]);

  return (
    <>
      <div
        className={`button-cont ${labelRight ? 'button-container-right' : ''} ${
          labelLeft ? 'button-container-left' : ''
        } ${fill ? 'fill' : ''}`}>
        {labelLeft && (
          <div
            className={`label-left ${size !== undefined ? size : ''} ${
              shape !== undefined ? shape : ''
            }`}>
            {labelLeft}
          </div>
        )}
        <button
          className={`trunks-button ${type !== undefined ? type : ''} ${
            size !== undefined ? size : ''
          } ${mod !== undefined ? mod : ''} ${fill ? 'fill' : ''} ${
            icon ? 'icon' : ''
          } ${shape !== undefined ? shape : ''}`}
          onMouseDown={() => setClickDown(true)}
          onMouseUp={() => setClickUp(true)}
          onAnimationEnd={() => setClickUp(false)}
          clickup-={clickUp.toString()}
          clickdown-={clickDown.toString()}
          onClick={onClick}>
          {iconLeft !== undefined && (
            <span className='button-icon-left'>{iconLeft}</span>
          )}
          {children !== undefined && (
            <span className='button-label'>{children}</span>
          )}
          {icon !== undefined && <span className='button-icon'>{icon}</span>}
          {iconRight !== undefined && (
            <span className='button-icon-right'>{iconRight}</span>
          )}
        </button>
        {labelRight && (
          <div className={`label-right ${size !== undefined ? size : ''} ${shape !== undefined ? shape : ''}`}>{labelRight}</div>
        )}
      </div>
    </>
  );
};

interface ButtonGroupProps {
  children?: ReactNode;
}

export const ButtonGroup: FC<ButtonGroupProps> = ({ children }) => {
  return (
    <div className='button-container'>
      <div className='button-group'>{children}</div>
    </div>
  );
};
