import WorkersList from "./components/Lists/Workers/WorkersList";
import ServiceList from "./components/Lists/Service/ServiceList";
import WorkersContextProvider from "./contexts/Workers/WorkersContextProvider";
import ModalContextProvider from "./contexts/Modal/ModalContextProvider";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "./services/firebaseConfig";
import { useNavigate } from "react-router-dom";

function App() {
	const [signOut] = useSignOut(auth);
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await signOut();
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<WorkersContextProvider>
			<ModalContextProvider>
				<div className="w-screen h-screen bg-primary-500 flex flex-col items-center justify-center overflow-hidden">
					<WorkersList />
					<ServiceList />
					<button
						type="button"
						onClick={handleLogout}
						className="absolute bottom-3 left-3 px-4 py-2 bg-red-500 rounded-md text-white"
					>
						Sair da conta
					</button>
				</div>
			</ModalContextProvider>
		</WorkersContextProvider>
	);
}

export default App;
