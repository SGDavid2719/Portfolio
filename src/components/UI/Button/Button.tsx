import "./button.css";

interface DefaultButton extends Button {
	type: "primary";
}

interface Button {
	children: React.ReactNode;
	onClick?: () => void;
}

export function Button({
	type = "primary",
	children,
	...props
}: DefaultButton) {
	const className = `button ${type}`;
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
}

export function PrimaryButton(props: Button) {
	return <Button type="primary" {...props} />;
}
