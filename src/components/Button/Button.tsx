import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
	variant?: "primary" | "secondary";
	children: ReactNode;
	loading?: boolean;
	type?: "button" | "submit" | "reset" | undefined;
}

function Button(props: Props) {
	const { children, variant = "primary", loading, type } = props;
	return (
		<button
			disabled={loading}
			type={type}
			className={clsx(
				variant === "primary" &&
					"text-white rounded-sm px-4 py-4 text-lg w-full transition",
				loading
					? "cursor-not-allowed bg-gray-400"
					: "bg-secondary-500 hover:bg-secondary-700",
			)}
		>
			{children}
		</button>
	);
}

export default Button;
