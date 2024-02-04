import Skeleton from "react-loading-skeleton";
import { useModalContext } from "../../../contexts/Modal/ModalContext";
import { useWorkersContext } from "../../../contexts/Workers/WorkersContext";
import Button from "../../Button/Button";
import ListItem from "./components/ListItem";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function WorkersList() {
	const { openDeleteModal, openCreateModal } = useModalContext();
	const { setSelectedWorker, workers, attendCustomer, loading } =
		useWorkersContext();
	return (
		<div className="bg-white flex flex-col items-center max-w-[380px] h-[500px] rounded-md shadow-lg">
			<span className="self-center mb-2 text-lg mt-4 mx-4">
				Ordem de atendimento
			</span>
			<div className="w-full border mb-2" />
			{loading ? (
				<div className="w-full flex flex-col px-2">
					<Skeleton width={"100%"} height={56} />
					<Skeleton width={"100%"} height={56} />
					<Skeleton width={"100%"} height={56} />
					<Skeleton width={"100%"} height={56} />
					<Skeleton width={"100%"} height={56} />
				</div>
			) : (
				<>
					<ol className="w-full">
						{workers.map((worker, index) => (
							<ListItem
								name={worker.name}
								index={index}
								actions={[
									{
										label: "Deletar",
										action: () => {
											setSelectedWorker(worker);
											openDeleteModal();
										},
									},
								]}
							/>
						))}
					</ol>

					<div className="mt-auto flex flex-col gap-y-2 mx-4 mb-4">
						<Button onClick={openCreateModal}>
							Adicionar funcionário <AddCircleOutlineIcon />
						</Button>
						{workers.length > 0 && (
							<Button
								onClick={() => attendCustomer(workers[0].id, workers[0].name)}
								variant="secondary"
							>
								Atender cliente
							</Button>
						)}
					</div>
				</>
			)}
		</div>
	);
}

export default WorkersList;
