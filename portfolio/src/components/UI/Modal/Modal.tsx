import { PrimaryButton } from "../Button/Button";
import "./modal.css";

interface Modal {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: Modal) => {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				{title && <div className="modal-header">{title}</div>}
				<div className="modal-body">{children}</div>
				<div className="modal-footer">
					<PrimaryButton onClick={onClose}>Close</PrimaryButton>
				</div>
			</div>
		</div>
	);
};

export default Modal;
