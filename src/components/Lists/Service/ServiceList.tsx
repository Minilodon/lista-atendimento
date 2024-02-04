import { useWorkersContext } from "../../../contexts/Workers/WorkersContext";
import Button from "../../Button/Button";
import { useModalContext } from "../../../contexts/Modal/ModalContext";

function ServiceList() {
	const { workersInService } = useWorkersContext();
	const { openWorkersDrawer } = useModalContext();
	return (
		<div className="mt-5">
			{workersInService.length > 0 && (
				<Button onClick={openWorkersDrawer}>
					Ver funcionários em atendimento (<b>{workersInService.length}</b>)
				</Button>
			)}
		</div>
	);
}

export default ServiceList;
