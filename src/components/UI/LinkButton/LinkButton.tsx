import "./linkbutton.css";

interface LinkButton {
	href: string;
	children: JSX.Element;
}

export function LinkButton({ href, children }: LinkButton) {
	return (
		<a href={href} role="link" target="_blank" className="link-btn">
			{children}
		</a>
	);
}
