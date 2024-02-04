import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
	variant?: "primary" | "secondary";
	children: ReactNode;
	loading?: boolean;
	type?: "button" | "submit" | "reset" | undefined;
	onClick?: () => void;
}

function getButtonColors(
	variant: "primary" | "secondary" | undefined,
	loading: boolean | undefined,
) {
	if (loading) return "bg-gray-400";
	if (!variant) return "bg-secondary-500 hover:bg-secondary-700 text-white";
	switch (variant) {
		case "primary":
			return "bg-secondary-500 hover:bg-secondary-700 text-white";
		default:
			return "bg-white hover:bg-secondary-500 text:primary-900 hover:text-white border border-primary-900";
	}
}

function Button(props: Props) {
	const { children, variant = "primary", loading, type, onClick } = props;
	const colors = getButtonColors(variant, loading);
	return (
		<button
			onClick={onClick}
			disabled={loading}
			type={type}
			className={clsx("rounded-sm px-4 py-4 text-lg w-full transition", colors)}
		>
			{children}
		</button>
	);
}

export default Button;
