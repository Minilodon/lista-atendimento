import { Button, Fab } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useModalContext } from "../../../contexts/Modal/ModalContext";
import { useWorkersContext } from "../../../contexts/Workers/WorkersContext";

function WorkersList() {
	const { openDeleteModal, openCreateModal } = useModalContext();
	const { setSelectedWorker, workers, cleanList, attendCustomer } =
		useWorkersContext();
	return (
		<div className="bg-slate-400 flex flex-col items-center justify-center flex-1">
			<span>Ordem de atendimento</span>
			<Button variant="contained" onClick={openCreateModal}>
				Adicionar funcionário
			</Button>
			<ol>
				{workers.map((worker, index) => (
					<li key={worker.id} className="flex items-center gap-x-2">
						<span>{index + 1}</span>
						<span>{worker.name}</span>
						<Fab
							color="error"
							aria-label="deletar"
							size="small"
							onClick={() => {
								setSelectedWorker(worker);
								openDeleteModal();
							}}
							style={{ zIndex: 0 }}
						>
							<ClearIcon />
						</Fab>
					</li>
				))}
			</ol>
			{/* {workers.length > 0 && (
				<Button variant="contained" onClick={putFirstToLastPosition}>
					Próximo
				</Button>
			)} */}
			{workers.length > 0 && (
				<Button
					variant="contained"
					onClick={() => attendCustomer(workers[0].id, workers[0].name)}
				>
					Atender cliente
				</Button>
			)}
			{workers.length > 0 && (
				<Button variant="contained" onClick={cleanList}>
					Limpar lista
				</Button>
			)}
		</div>
	);
}

export default WorkersList;
