import React, { ReactNode, useState, FC, MouseEvent } from 'react';
import './card.sass';

interface Props {
  type?: string;
  hover?: boolean;
  clickable?: boolean;
  cover?: string;
  extra?: string;
  children?: ReactNode;
  size?: string;
  title?: string;
  buttons?: ReactNode;
  description?: string;
  id?: string;
}

export const Card: FC<Props> = ({
  type,
  hover,
  clickable,
  cover,
  extra,
  children,
  size,
  title,
  buttons,
  description,
  id,
  ...element
}) => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div
      className={`card ${type} hover-${hover} clickable-${clickable} ${clicked}`}
      onClick={() => setClicked(true)}
      onAnimationEnd={() => setClicked(false)}
      clicked-={clicked.toString()}>
      <div className={cover ? 'card-cover' : 'no-card'}>
        <img alt='cover' src={cover} />
      </div>
      {title && (
        <div className='card-header'>
          {title}
          <div className='extra'>{extra}</div>
        </div>
      )}
      <div className='card-content'>{children}</div>
      <div className='card-description'>{description}</div>
      <div className='card-buttons'>{buttons}</div>
    </div>
  );
};

interface PlsLord {
  children?: string;
  onClick?: () => void;
}

export const CardButton: FC<PlsLord> = (children, onClick) => {
  return (
    <>
      <button>{children}</button>
    </>
  );
};
