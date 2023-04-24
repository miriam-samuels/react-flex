import React from "react";
import style from "./button.module.scss";

interface Props {
	className?: string | null;
	loading?: boolean | null;
	type?: "button" | "submit" | "reset" | undefined;
	disabled?: boolean;
	ref?: any;
	onClick?:
		| ((event?: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>)
		| undefined
		| any;
	children?: React.ReactNode | Array<React.ReactNode>;
	id?: string;
}

export const Btn: React.FC<Props> = ({ className, ...props }) => {
	return (
		<button className={`${style["btn-wrap"]} ${className} `} {...props}>
			{props?.children}
		</button>
	);
};



export const BtnSecondary: React.FC<Props> = ({ className, ...props }) => {
	return (
		<button
			className={`${style["btn"]} ${style["btn-sec"]} ${className} `}
			{...props}>
			{props?.children}
		</button>
	);
};

export const BtnTertiary: React.FC<Props> = ({ className, ...props }) => {
	return (
		<button
			className={`${style["btn"]} ${style["btn-ter"]} ${className} `}
			{...props}>
			{props?.children}
		</button>
	);
};

export const BtnAlternate: React.FC<Props> = ({ className, ...props }) => {
	return (
		<button
			className={`${style["btn"]} ${style["btn-alt"]} ${className} `}
			{...props}>
			{props?.children}
		</button>
	);
};

export const BtnPrimary: React.FC<Props> = ({ className, ...props }) => {
	return (
		<button
			className={`${style["btn"]} ${style["btn-pri"]} ${className} `}
			{...props}>
			{props?.children}
		</button>
	);
};
