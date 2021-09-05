import React, { FC, ReactNode } from 'react';
import './trunks-text.sass';

interface TextProps {
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  disabled?: boolean;
  highlight?: boolean;
  code?: boolean;
  keyboard?: boolean;
  underline?: boolean;
  strike?: boolean;
  bold?: boolean;
  italic?: boolean;
  link?: boolean;
  children?: ReactNode;
  size?: 1 | 2 | 3 | 4 | 5;
  href?: string;
  target?: string;
}

export const Text: FC<TextProps> = ({
  children,
  size,
  href,
  target,
  ...props
}) => {

console.log()

  return (
    <>
      <span className={`trunks-text ${Object.keys(props).join(' ')} ${size ? 'h' + size : ''}`}>
        {children}
      </span>
    </>
  );
};

interface TextBlockProps {
  children?: ReactNode;
}

export const TextBlock: FC<TextBlockProps> = ({children}) => {
  return (
    <div className="text-block">
      {children}
    </div>
  )
}