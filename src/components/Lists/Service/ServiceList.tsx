import { Check } from "@mui/icons-material";
import { useWorkersContext } from "../../../contexts/Workers/WorkersContext";
import { Fab } from "@mui/material";

function ServiceList() {
	const { workersInService, finishService } = useWorkersContext();
	return (
		<div className="bg-red-500 flex flex-col items-center justify-center flex-1">
			<span>Em atendimento</span>
			<ul>
				{workersInService.map((worker, index) => (
					<li key={worker.id} className="flex items-center gap-x-2">
						<span>{index + 1}</span>
						<span>{worker.name}</span>
						<Fab
							color="success"
							aria-label="deletar"
							size="small"
							onClick={() => {
								finishService(worker.id, worker.name);
							}}
							style={{ zIndex: 0 }}
						>
							<Check />
						</Fab>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ServiceList;
