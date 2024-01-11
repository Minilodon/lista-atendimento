import { TextField } from "@mui/material";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [signInWithEmailAndPassword, user, loading] =
		useSignInWithEmailAndPassword(auth);

	const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(email, password);
		} catch (error) {
			console.log(error);
		}
	};
	console.log(user);
	return (
		<div className="w-screen h-screen bg-primaryGreen flex justify-center items-center">
			<form
				className="bg-white px-4 py-4 flex flex-col gap-y-3 shadow-md rounded-sm min-h-[340px] min-w-[320px]"
				onSubmit={handleSignIn}
			>
				{loading ? (
					<span>Carregando...</span>
				) : (
					<div className="flex flex-col gap-y-2 items-center">
						<span className="self-center mb-2 text-lg">Fazer Login</span>
						<TextField
							label="E-mail"
							variant="outlined"
							type="email"
							color="primary"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							style={{ marginBottom: "8px", width: "100%" }}
						/>
						<TextField
							label="Senha"
							variant="outlined"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							style={{ marginBottom: "8px", width: "100%" }}
						/>
						<Link
							to={"/recover-password"}
							className="text-center hover:text-blue-500 transition text-sm"
						>
							Esqueceu a sua senha?
						</Link>
						<button
							type="submit"
							className="bg-blue-700 hover:bg-blue-500 text-white rounded-sm px-4 py-4 text-lg w-full"
						>
							Login
						</button>
						<div className="flex gap-x-2">
							<span className="text-sm">Não possui uma conta?</span>
							<Link
								to={"/register"}
								className="text-primaryBlue underline hover:text-blue-500 transition text-sm"
							>
								Crie sua conta aqui
							</Link>
						</div>
					</div>
				)}
			</form>
		</div>
	);
}

export default Login;
