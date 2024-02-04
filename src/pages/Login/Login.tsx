import { TextField } from "@mui/material";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import NavLink from "../../components/NavLink/NavLink";

interface FormInputs {
	email: string;
	password: string;
}

const schema = yup.object().shape({
	email: yup.string().email("Email inválido").required("Campo obrigatório"),
	password: yup.string().required("Campo obrigatório"),
});

function Login() {
	const [signInWithEmailAndPassword, , loading] =
		useSignInWithEmailAndPassword(auth);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>({
		resolver: yupResolver(schema),
	});

	const handleSignIn = async (data: FormInputs) => {
		try {
			await signInWithEmailAndPassword(data.email, data.password);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="w-screen h-screen bg-primary-500 flex justify-center items-center">
			<form
				className="bg-white px-4 py-4 flex flex-col gap-y-3 shadow-md rounded-sm min-h-[340px] min-w-[320px]"
				onSubmit={handleSubmit(handleSignIn)}
			>
				<div className="flex flex-col gap-y-2 items-center">
					<span className="self-center mb-2 text-lg">Fazer Login</span>
					{loading ? (
						<div className="w-full">
							<Skeleton width={"100%"} height={56} />
						</div>
					) : (
						<div className="flex flex-col w-full">
							<TextField
								label="E-mail"
								variant="outlined"
								type="email"
								focused={!!errors.email?.message}
								color={errors.email?.message ? "error" : "primary"}
								style={{ marginBottom: "8px", width: "100%" }}
								disabled={loading}
								{...register("email")}
							/>
							<p className="text-red-500 text-sm mb-1">
								{errors.email?.message}
							</p>
						</div>
					)}
					{loading ? (
						<div className="w-full">
							<Skeleton width={"100%"} height={56} />
						</div>
					) : (
						<div className="flex flex-col w-full">
							<TextField
								label="Senha"
								variant="outlined"
								type="password"
								style={{ marginBottom: "8px", width: "100%" }}
								disabled={loading}
								{...register("password")}
								focused={!!errors.password?.message}
								color={errors.password?.message ? "error" : "primary"}
							/>
							<p className="text-red-500 text-sm mb-1">
								{errors.password?.message}
							</p>
						</div>
					)}
					<div className="h-6 w-full flex items-center justify-center">
						{/* {!loading && (
							<NavLink to={"/recover-password"}>Esqueceu a sua senha?</NavLink>
						)} */}
					</div>
					<Button type="submit" loading={loading}>
						Login
					</Button>
					<div className="flex gap-x-2 h-6 w-full items-center justify-center">
						{!loading && (
							<>
								<span className="text-sm">Não possui uma conta?</span>
								<NavLink to={"/register"}>Crie sua conta aqui</NavLink>
							</>
						)}
					</div>
				</div>
			</form>
		</div>
	);
}

export default Login;
