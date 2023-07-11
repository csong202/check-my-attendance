import React from "react";
import { Link } from "react-router-dom/dist/index.js";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

const Button = ({
	className,
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize,
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<Link to="/prof-sign-in" className="btn-mobile">
			<button
				className={`btn ${checkButtonStyle} ${checkButtonSize}${
					className ? ` ${className}` : ""
				}`}
				onClick={onClick}
				type={type}
			>
				{children}
			</button>
		</Link>
	);
};

export default Button;
