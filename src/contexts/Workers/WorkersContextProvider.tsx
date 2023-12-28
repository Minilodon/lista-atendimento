import React, {
	ReactNode,
	createContext,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from "react";
import { Worker } from "../../types/Worker";
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
} from "firebase/firestore";
import { auth, firestore } from "../../services/firebaseConfig";
import moment from "moment";

interface WorkersContextValue {
	selectedWorker: Worker | undefined;
	setSelectedWorker: React.Dispatch<React.SetStateAction<Worker | undefined>>;
	workers: Worker[];
	setWorkers: React.Dispatch<React.SetStateAction<Worker[]>>;
	addWorker: (name: string) => void;
	// putFirstToLastPosition: () => void;
	deleteWorker: (workerId: string) => void;
	cleanList: () => void;
	workersInService: Worker[];
	attendCustomer: (id: string, name: string) => void;
	finishService: (workerId: string, workerName: string) => void;
}

export const WorkersContext = createContext<WorkersContextValue>(
	{} as WorkersContextValue,
);

type WorkersContextProviderProps = {
	children: ReactNode;
};

export default function WorkersContextProvider(
	props: WorkersContextProviderProps,
) {
	const { children } = props;

	const [workers, setWorkers] = useState<Worker[]>([]);
	const [workersInService, setWorkersInService] = useState<Worker[]>([]);
	const [selectedWorker, setSelectedWorker] = useState<Worker>();

	const currentUserId = auth?.currentUser?.uid;

	const workersWorkingCollectionRef = useMemo(() => collection(firestore, "workerWorking"),[]);
	const workersNotWorkingCollectionRef = useMemo(() => collection(firestore, "workerNotWorking"),[]);

	const fetchWorkers = useCallback(async () => {
		const workingData = await getDocs(workersWorkingCollectionRef);
		const workersWorking = workingData.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		})) as Worker[];

		const notWorkingData = await getDocs(workersNotWorkingCollectionRef);
		const workersNotWorking = notWorkingData.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		})) as Worker[];

		const sortedWorkingWorkers = workersWorking.sort((a,b) => a.createdAt > b.createdAt ? 1 : -1)
		const sortedNotWorkingWorkers = workersNotWorking.sort((a,b) => a.createdAt > b.createdAt ? 1 : -1)

		setWorkers(sortedNotWorkingWorkers);
		setWorkersInService(sortedWorkingWorkers)
	},[workersNotWorkingCollectionRef, workersWorkingCollectionRef]);

	useEffect(() => {
		fetchWorkers();
	}, [fetchWorkers]);

	const addNotWorkingWorker = useCallback(
		async (name: string) => {
			if (!currentUserId) {
				throw new Error(`Usuário não logado`);
			}
			const newWorker: Omit<Worker, "id"> = {
				name,
				manager: currentUserId,
				createdAt: moment().toDate(),
			};
			await addDoc(workersNotWorkingCollectionRef, newWorker);
			fetchWorkers();
		},
		[currentUserId, fetchWorkers, workersNotWorkingCollectionRef],
	);

	const addWorkingWorker = useCallback(
		async (name: string) => {
			if (!currentUserId) {
				throw new Error(`Usuário não logado`);
			}
			const newWorker: Omit<Worker, "id"> = {
				name,
				manager: currentUserId,
				createdAt: moment().toDate(),
			};
			await addDoc(workersWorkingCollectionRef, newWorker);
			fetchWorkers();
		},
		[currentUserId, fetchWorkers, workersWorkingCollectionRef],
	);

	const attendCustomer = useCallback(
		async (id: string, name: string) => {
			if (workers.length === 0) return;
			try {
				const workerDoc = doc(firestore, "workerNotWorking", id);
				await deleteDoc(workerDoc);
				await addWorkingWorker(name)
				await fetchWorkers();
			} catch (error) {
				console.log(error);
			}
		},
		[addWorkingWorker, fetchWorkers, workers.length],
	);

	const deleteWorker = useCallback(
		async (id: string) => {
			try {
				const workerDoc = doc(firestore, "workerNotWorking", id);
				await deleteDoc(workerDoc);
				fetchWorkers();
			} catch (error) {
				console.log(error);
			}
		},
		[fetchWorkers],
	);

	const finishService = useCallback(
		async (workerId: string, workerName: string) => {
			try {
				const workerDoc = doc(firestore, "workerWorking", workerId);
				await deleteDoc(workerDoc);
				await addNotWorkingWorker(workerName);
				await fetchWorkers();
			} catch (error) {
				console.log(error);
			}
		},
		[addNotWorkingWorker, fetchWorkers],
	);

	const cleanList = useCallback(() => {
		setWorkers([]);
	}, []);

	const value: WorkersContextValue = React.useMemo(
		() => ({
			selectedWorker,
			setSelectedWorker,
			workers,
			setWorkers,
			addWorker: addNotWorkingWorker,
			deleteWorker,
			cleanList,
			workersInService,
			attendCustomer,
			finishService,
		}),
		[addNotWorkingWorker, attendCustomer, cleanList, deleteWorker, finishService, selectedWorker, workers, workersInService],
	);

	return (
		<WorkersContext.Provider value={value}>{children}</WorkersContext.Provider>
	);
}
