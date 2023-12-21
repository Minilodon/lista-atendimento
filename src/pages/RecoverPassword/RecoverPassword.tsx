import { TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function RecoverPassword() {
	const [email, setEmail] = useState("");

	return (
		<div className="w-screen h-screen bg-primaryGreen flex justify-center items-center">
			<form className="bg-white px-4 py-4 flex flex-col gap-y-3 shadow-md rounded-sm">
				<span>Recuperar senha</span>
				<TextField
					label="E-mail"
					variant="outlined"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button
					type="button"
					className="bg-primaryBlue text-white rounded-sm px-4 py-4 text-lg"
				>
					Enviar
				</button>
				<Link
					to={"/"}
					className="text-primaryBlue underline hover:text-primaryOrange transition text-center"
				>
					Voltar para o login
				</Link>
			</form>
		</div>
	);
}

export default RecoverPassword;
