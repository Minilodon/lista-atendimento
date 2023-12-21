import { useContext } from "react";
import { WorkersContext } from "./WorkersContextProvider";

export function useWorkersContext() {
	const context = useContext(WorkersContext);

	if (typeof context === "undefined") {
		throw new Error(
			"useWorkersContext must be used within a WorkersContextProvider",
		);
	}

	return context;
}
