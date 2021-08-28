import React, { ReactNode, FC } from "react";
import "./presenter.css";

interface PresenterProps {
	type: "vertical" | "horizontal";
	children: ReactNode;
}

interface PresenterBodyProps {
	children?: ReactNode;
}

interface PresenterDescProps {
	children?: ReactNode;
	title?: string;
}

export const Presenter: FC<PresenterProps> = ({ type, children }) => {
	return (
		<>
			<div className="trunks-presenter-container">
				<div className={`trunks-presenter ${type}`}>{children}</div>
			</div>
		</>
	);
};

export const PresBody: FC<PresenterBodyProps> = ({ children }) => {
	return (
		<>
			<div className="presenter-body-content">{children}</div>
		</>
	);
};

export const PresDesc: FC<PresenterDescProps> = ({ title, children }) => {
	return (
		<>
			<div className="presenter-description">
           <h2 className="presenter-title">{title}</h2>
				{children}
			</div>
		</>
	);
};
