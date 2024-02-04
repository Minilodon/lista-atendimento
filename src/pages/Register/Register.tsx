import { TextField } from "@mui/material";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Skeleton from "react-loading-skeleton";
import Button from "../../components/Button/Button";
import NavLink from "../../components/NavLink/NavLink";

interface FormInputs {
	email: string;
	password: string;
	passwordConfirmation: string;
}

const schema = yup.object().shape({
	email: yup.string().email("Email inválido").required("Campo obrigatório"),
	password: yup.string().required("Campo obrigatório"),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref("password")], "As senhas não são iguais")
		.required("Campo obrigatório"),
});

function Register() {
	const [createUserWithEmailAndPassword, loading] =
		useCreateUserWithEmailAndPassword(auth);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>({
		resolver: yupResolver(schema),
	});

	const handleRegister = async (data: FormInputs) => {
		try {
			await createUserWithEmailAndPassword(data.email, data.password);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="w-screen h-screen bg-primary-500 flex justify-center items-center">
			<form
				className="bg-white px-4 py-4 flex flex-col gap-y-3 shadow-md rounded-sm min-h-[340px] min-w-[320px]"
				onSubmit={handleSubmit(handleRegister)}
			>
				<div className="flex flex-col gap-y-2 items-center">
					<span className="self-center mb-2 text-lg">Criar nova conta</span>
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
					{loading ? (
						<div className="w-full">
							<Skeleton width={"100%"} height={56} />
						</div>
					) : (
						<div className="flex flex-col w-full">
							<TextField
								label="Confirmação de senha"
								variant="outlined"
								type="password"
								style={{ marginBottom: "8px", width: "100%" }}
								disabled={loading}
								{...register("passwordConfirmation")}
								focused={!!errors.password?.message}
								color={errors.password?.message ? "error" : "primary"}
							/>
							<p className="text-red-500 text-sm mb-1">
								{errors.passwordConfirmation?.message}
							</p>
						</div>
					)}
					<Button type="submit">Criar conta</Button>
					<div className="flex gap-x-2 items-center">
						<span>Já possui uma conta?</span>
						<NavLink to={"/"}>Faça login</NavLink>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Register;
