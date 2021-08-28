import React, {
	useState,
	FC,
	useEffect,
	Component,
	ReactElement,
	ReactNode,
} from "react";
import "./button.css";

interface Props {
	type?: "default" | "primary" | "danger" | "dashed" | "textonly";
	size?: "default" | "large" | "small";
	disabled?: boolean;
	children: ReactNode;
	icon?: ReactElement;
	fill?: boolean;
}

const Button: FC<Props> = ({ type, size, disabled, children, icon, fill }) => {
	const [clickUp, setClickUp] = useState<boolean>(false);
	const [clickDown, setClickDown] = useState<boolean>(false);

	useEffect(() => {
		onmouseup = (e) => {
			clickDown && setClickDown(false);
		};
	}, [clickUp, clickDown]);

	return (
		<button
			className={`trunks-button ${type} ${size} ${disabled} ${clickUp} ${clickDown} icon fill-${fill}`}
			onMouseDown={() => !disabled && setClickDown(true)}
			onMouseUp={() => !disabled && setClickUp(true)}
			onAnimationEnd={() => setClickUp(false)}
			clickUp-={clickUp.toString()}
			clickDown-={clickDown.toString()}
		>
			<span className="button-icon">{icon}</span>
			<span className="button-label">{children}</span>
		</button>
	);
};

export default Button;
