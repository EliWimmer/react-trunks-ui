import React, {
	useState,
	FC,
	useEffect,
	ReactElement,
	ReactNode,
	ReactEventHandler,
} from "react";
import "./trunks-button.sass";

interface Props {
	type?: "default" | "primary" | "dashed" | "textonly" | "link";
	size?: "default" | "large" | "small";
	mod?: "disabled" | "warn" | "danger";
	shape?: "round" | "square" | "squircle";
	children?: ReactNode;
	iconLeft?: ReactElement;
	iconRight?: ReactElement;
	icon?: ReactElement;
	fill?: boolean;
	labelLeft?: string;
	labelRight?: string;
	onClick?: () => void;
}

export const Button: FC<Props> = ({ type, size, mod, shape, children, iconLeft, iconRight, icon, fill, onClick, labelLeft, labelRight }) => {
	const [clickUp, setClickUp] = useState<boolean>(false);
	const [clickDown, setClickDown] = useState<boolean>(false);

	useEffect(() => {
		onmouseup = (e) => {
			clickDown && setClickDown(false);
		};
	}, [clickUp, clickDown]);

	const isFill: string = fill ? "fill" : ""
	const isIcon: string = icon ? "icon" : ""
	return (
		<>
		<button
			className={`trunks-button ${type} ${size} ${mod} ${isFill} ${isIcon} ${shape}`}
			onMouseDown={() => setClickDown(true)}
			onMouseUp={() => setClickUp(true)}
			onAnimationEnd={() => setClickUp(false)}
			clickup-={clickUp.toString()}
			clickdown-={clickDown.toString()}
			onClick={onClick}
		>
			{labelLeft && <div className="label-left">{labelLeft}</div>}
			<span className="button-icon-left">{iconLeft}</span>
			<span className="button-label">{children}</span>
			<span className="button-icon">{icon}</span>
			<span className="button-icon-right">{iconRight}</span>
		</button>
		{labelRight && <span className="label-right">{labelRight}</span>}
		</>
	);
};

interface ButtonGroupProps {
	children?: ReactNode;
}

export const ButtonGroup: FC<ButtonGroupProps> = ({children}) => {
return (
	<div className="button-group">
		{children}
	</div>
)
}
