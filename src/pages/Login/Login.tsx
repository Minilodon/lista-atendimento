import { TextField } from "@mui/material"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../services/firebaseConfig";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [
    signInWithEmailAndPassword,
    user,
    loading,
  ] = useSignInWithEmailAndPassword(auth);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(user)
  return (
    <div className="w-screen h-screen bg-primaryGreen flex justify-center items-center">
        <form className="bg-white px-4 py-4 flex flex-col gap-y-3 shadow-md rounded-sm" onSubmit={handleSignIn}>
          {loading ?
            <span>Carregando...</span>
          : 
            <>
              <span>Login</span>
              <TextField label="E-mail" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <TextField label="Senha" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <Link to={'/recover-password'} className="text-center hover:text-primaryOrange transition">Esqueceu a sua senha?</Link>
              <button className="bg-primaryBlue text-white rounded-sm px-4 py-4 text-lg">Login</button>
              <div className="flex gap-x-2">
                <span>Não possui uma conta?</span>
                <Link to={'/register'} className="text-primaryBlue underline hover:text-primaryOrange transition">Crie sua conta aqui</Link>
              </div>
            </>
          }
        </form>
    </div>
  )
}

export default Login