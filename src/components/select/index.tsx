import React, { memo, useEffect, useState } from "react";
import style from "./select.module.scss";
import useClose from "../../hooks/useClose";
import { ArrowDown2 } from "iconsax-react";
import { MiniLoader } from "../loader";

interface Props {
	idx?: number;
	name: string;
	label?: string;
	options?: any[] | Option[];
	defaultValue?: Option;
	className?: string;
	children?: React.ReactNode | React.ReactNode[];
	showWarning?: boolean;
	loading?: boolean;
	reset?: any;
	required?: boolean | false;
	handleChange?: (option: string, name: string, idx?: number) => void;
}

export type Option = { label: any; value: any; disabled?: boolean };

const Select: React.FC<Props> = memo(
	({
		idx,
		label,
		children,
		name,
		options,
		defaultValue,
		className,
		showWarning,
		required,
		loading,
		reset,
		handleChange,
	}) => {
		const [isOpen, setIsOpen] = useState<boolean>(false);
		const [value, setValue] = useState<Option | undefined>();

		const toggleSelect = () => setIsOpen(!isOpen);
		const ref = useClose(() => setIsOpen(false));

		const handleClose = () => {
			setIsOpen(false);
		};
		const setOption = (option: Option) => {
			setValue(option);
			if (handleChange) {
				handleChange(option.value, name, idx);
			}
			handleClose();
		};
		useEffect(() => {
			if (defaultValue) {
				setValue(defaultValue?.value ? defaultValue : undefined);
			}
		}, [defaultValue]);

		useEffect(() => {
			if (reset) {
				setValue(undefined);
			}
		}, [reset]);

		return (
			<div className={`${style.select__container}`} ref={ref}>
				<div className={style.select}>
					{label && (
						<div className={style.select__title}>
							{label} &nbsp;
							{required === true ? (
								<span className="input-field--required">*</span>
							) : (
								<span className="input-field--optional">(optional)</span>
							)}
						</div>
					)}
					<div
						className={`${style.select__header} ${className}`}
						onClick={toggleSelect}
						style={showWarning ? { borderColor: "#d92d20" } : {}}>
						<div className="select__header__value">
							<span>{value?.label ?? `Select ${label || name}`}</span>
						</div>
						<div
							className={`${style.select__header__icon} ${
								isOpen && style["select__header__icon--active"]
							}`}>
							<ArrowDown2 size="16" color="#0D294D" />
						</div>
					</div>
					<div className={style.select__list__container}>
						{isOpen &&
							(loading ? (
								<div className={style.select__loader}>
									<MiniLoader />
								</div>
							) : (
								<ul
									className={`${style.select__list} ${style.active}`}
									id="select">
									{options?.map((option: Option, index: number) => (
										<li
											className={style.select__list__item}
											key={index}
											onClick={() => {
												if (!option.disabled) {
													setOption(option);
												}
											}}
											style={{ opacity: `${option.disabled ? 0.5 : 1}` }}>
											{option?.label}
										</li>
									))}

									<div onClick={handleClose}>{children}</div>
								</ul>
							))}
					</div>
				</div>
			</div>
		);
	}
);

export default Select;
