import React, { ReactNode, useState, FC } from "react";
import "./card.css";

interface Props {
  type?: string;
  hover?: boolean;
  clickable?: boolean;
  cover?: string;
  extra?: string;
  children?: ReactNode;
  size?: string;
  title?: string;
  buttons?: any;
  description?: string;
}

const Card: FC<Props> = ({
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
}) => {

  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div
      className={
        `card ${type} hover-${hover} clickable-${clickable} ${clicked}`
      }
      onClick={() => setClicked(true)}
      onAnimationEnd={() => setClicked(false)}
      clicked-={clicked.toString()}
    >
      <div className={cover ? "card-cover" : "no-card"}>
        <img alt="cover" src={cover} />
      </div>
      <div className="card-header">
        {title}
        <div className="extra">{extra}</div>
      </div>
      <div className="card-content">{children}</div>
      <div className="card-description">{description}</div>
      
        {buttons &&
          <div className="card-buttons-container">
            {buttons.map((buttons:any) => (
              <button onClick={buttons.click} key={buttons.key} className="card-buttons">{buttons.label}</button>
            ))}
          </div>
        }
      

    </div>
  );
}
export default Card;