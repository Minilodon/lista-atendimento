import { Link } from "react-router-dom";

interface Props {
	to: string;
	children: React.ReactNode;
}

function NavLink(props: Props) {
	const { to, children } = props;
	return (
		<Link
			to={to}
			className="text-primaryBlue underline hover:text-blue-500 transition text-sm"
		>
			{children}
		</Link>
	);
}

export default NavLink;
