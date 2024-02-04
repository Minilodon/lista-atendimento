import MoreActions from "../../../MoreActions/MoreActions";

interface Props {
	index: number;
	name: string;
	actions: {
		label: string;
		action: () => void;
	}[];
}

function ListItem(props: Props) {
	const { actions, index, name } = props;
	return (
		<li className="flex items-center gap-x-2 w-full my-3 px-3">
			<span className="text-lg">{index + 1}</span>
			<span>{name}</span>
			<MoreActions actions={actions} />
			{/* {actions.map((action) => {
				return (
					<div onClick={action.action} className="ml-auto">
						{action.label}
					</div>
				);
			})} */}
		</li>
	);
}

export default ListItem;
