import React, { FC, ReactNode } from "react";
import "./typography.css";

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
    children?: ReactNode;
}

interface TitleProps {
	size: 1 | 2 | 3 | 4 | 5;
    children: ReactNode;
}

interface LinkProps {
	href: string;
	target: string;
    children: ReactNode;
}

export const Text: FC<TextProps> = ({children, ...props}) => {

	function returnKeys(obj: Record<string, boolean>) {
		return Object.keys(obj).map(t => obj[t] ? t : null).filter(t => t !== null)
	  }

	return (
		<>
			<span
			className={`trunks-text ${Object.keys(props)}`}>
				{children}
			</span>
		</>
	);
};
