import React from 'react'
import { Pending, Success, Warning } from '../../assets/icons';
import useClose from '../../hooks/useClose';
import './index.scss'

export interface ModalProps {
	heading?: string;
	sub?: string;
	children?: React.ReactNode | Array<React.ReactNode>;
	show?: boolean;
	className?: string;
	type?: "success" | "warning" | "pending";
	hide: () => void;
};
function Modal(props: ModalProps) {
	const { heading, sub, children, className, show, type, hide } = props;
	const ref = useClose(hide);
	if (show) {
		return (
			<div id="modal">
				<div className="modal-container">
					<div className="modal-box"></div>
					<div className={`modal ${className && className}`} ref={ref}>
						{type && type === "success" && <Success />}
						{type && type === "warning" && <Warning />}
						{type && type === "pending" && <Pending />}

						<div className="modal-head">
							{heading && <h4 className="modal-heading">{heading}</h4>}
							{sub && <span className="modal-sub">{sub}</span>}
						</div>
						<div className="modal-content">{children}</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <></>;
	}
}


export default Modal
