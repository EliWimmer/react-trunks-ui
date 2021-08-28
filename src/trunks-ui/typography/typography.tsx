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

export const Text: FC<TextProps> = ({
	secondary,
	success,
	warning,
	danger,
	disabled,
	highlight,
	code,
	keyboard,
	underline,
	strike,
	bold,
	italic,
    children,
}) => {
	return (
		<span
			className={`text 
            secondary-${secondary} 
            success-${success} 
            warning-${warning} 
            danger-${danger} 
            disabled-${disabled} 
            highlight-${highlight} 
            code-${code} 
            keyboard-${keyboard} 
            underline-${underline} 
            strike-${strike} 
            bold-${bold} 
            italic-${italic}`}>
			{children}
		</span>
	);
};
