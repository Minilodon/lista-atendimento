import { useContext } from "react";
import { ModalContext } from "./ModalContextProvider";

export function useModalContext() {
	const context = useContext(ModalContext);

	if (typeof context === "undefined") {
		throw new Error(
			"useModalContext must be used within a ModalContextProvider",
		);
	}

	return context;
}
