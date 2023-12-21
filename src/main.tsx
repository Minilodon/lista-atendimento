import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthContextProvider from "./contexts/Auth/AuthContextProvider.tsx";
import Routes from "./Routes.tsx";

const rootElement = document.getElementById("body");

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<AuthContextProvider>
				<Routes />
			</AuthContextProvider>
		</React.StrictMode>,
	);
} else {
	throw new Error("Root element not found");
}
