import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useWorkersContext } from "../../../contexts/Workers/WorkersContext";
interface Props {
	showModal: boolean;
	closeModal: () => void;
}

export default function CreateModal(props: Props) {
	const { closeModal, showModal } = props;

	const [username, setUsername] = useState("");
	const [error, setError] = useState(false);

	const { addWorker } = useWorkersContext();

	const resetWorker = () => {
		setUsername("");
		setError(false);
		closeModal();
	};

	return (
		<div>
			<Modal open={showModal} onClose={resetWorker}>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] bg-slate-100 shadow-lg p-3 flex flex-col">
					<span className="mb-3">Criar usuário</span>
					<div className="flex flex-col">
						<TextField
							label="Nome"
							value={username}
							error={error}
							onChange={(event) => {
								setError(false);
								setUsername(event.target.value);
							}}
						/>
						{error && <span>Campo obrigatório</span>}
					</div>
					<div className="flex items-center justify-between">
						<button
							type="button"
							onClick={() => {
								if (username.length <= 0) {
									setError(true);
									return;
								}
								addWorker(username);
								resetWorker();
							}}
						>
							Sim
						</button>
						<button onClick={resetWorker} type="button">
							Cancelar
						</button>
					</div>
				</div>
			</Modal>
		</div>
	);
}
