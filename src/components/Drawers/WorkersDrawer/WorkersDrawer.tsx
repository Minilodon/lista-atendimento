import clsx from "clsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useWorkersContext } from "../../../contexts/Workers/WorkersContext";

interface Props {
	showDrawer: boolean;
	closeDrawer: () => void;
}

function WorkersDrawer(props: Props) {
	const { closeDrawer, showDrawer } = props;
	const { workersInService, finishService } = useWorkersContext();
	return (
		<>
			<div
				className={clsx(
					"w-screen h-screen transition absolute top-0 left-0 z-30 flex items-center justify-center bg-secondary-800 opacity-50",
					showDrawer ? "" : "hidden",
				)}
				onClick={closeDrawer}
			></div>
			{showDrawer && (
				<div
					className="absolute w-screen h-screen top-0 left-0 flex items-center justify-center z-50"
					onClick={closeDrawer}
				>
					<div
						className="bg-white h-3/4 w-3/4 p-8 flex flex-col opacity-100"
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						<button onClick={closeDrawer} className="flex items-center gap-x-2">
							<ArrowBackIcon />
							Voltar
						</button>
						<h1 className="self-center text-lg mt-2">Em atendimento</h1>
						<ul className="w-full mt-4">
							{workersInService.map((worker, index) => (
								<li key={worker.id} className="flex items-center gap-x-2 mb-2">
									<span className="text-lg">{index + 1}</span>
									<span className="text-lg">{worker.name}</span>
									<span
										className="ml-auto py-1 rounded-lg bg-green-500 text-white px-3"
										onClick={() => {
											finishService(worker.id, worker.name);
										}}
									>
										Finalizar atendimento
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</>
	);
}

export default WorkersDrawer;
