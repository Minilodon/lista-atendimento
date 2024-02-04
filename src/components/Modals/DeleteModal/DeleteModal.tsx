import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useWorkersContext } from "../../../contexts/Workers/WorkersContext";
import Button from "../../Button/Button";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
};

interface Props {
	showModal: boolean;
	closeModal: () => void;
}

export default function DeleteModal(props: Props) {
	const { closeModal, showModal } = props;
	const { selectedWorker, setSelectedWorker, deleteWorker } =
		useWorkersContext();

	const resetWorker = () => {
		setSelectedWorker(undefined);
		closeModal();
	};

	return (
		<div>
			<Modal open={showModal} onClose={resetWorker}>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Remover {selectedWorker?.name} da lista?
					</Typography>
					<div className="flex items-center justify-between gap-x-2 mt-4">
						<Button onClick={resetWorker} type="button" variant="secondary">
							Cancelar
						</Button>
						<Button
							type="button"
							onClick={() => {
								if (!selectedWorker?.id) {
									throw new Error("Funcionário não selecionado");
								}
								deleteWorker(selectedWorker.id);
								resetWorker();
							}}
						>
							Sim
						</Button>
					</div>
				</Box>
			</Modal>
		</div>
	);
}
