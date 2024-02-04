import * as React from "react";
import Popover from "@mui/material/Popover";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Props {
	actions: {
		label: string;
		action: () => void;
	}[];
}

export default function MoreActions(props: Props) {
	const { actions } = props;
	const [anchorEl, setAnchorEl] = React.useState<HTMLSpanElement | null>(null);

	const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	return (
		<div className="ml-auto">
			<span onClick={handleClick} aria-describedby={id}>
				<MoreVertIcon />
			</span>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "center",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				{actions.map((action) => (
					<span onClick={action.action} key={action.label} className="m-2">
						{action.label}
					</span>
				))}
			</Popover>
		</div>
	);
}
