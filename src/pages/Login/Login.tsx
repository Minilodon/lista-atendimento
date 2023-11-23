import { TextField } from "@mui/material"

function Login() {
  return (
    <div className="w-screen h-screen bg-primaryGreen flex justify-center items-center">
        <form className="bg-white px-4 py-4 flex flex-col gap-y-3">
            <span>Login</span>
            <TextField label="Usuário" variant="outlined"/>
            <TextField label="Senha" variant="outlined" type="password"/>
            <button className="bg-primaryBlue text-white rounded-sm px-4 py-1">Login</button>
        </form>
    </div>
  )
}

export default Login