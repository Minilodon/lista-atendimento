import { TextField } from "@mui/material"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../services/firebaseConfig";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleCreateAccount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createUserWithEmailAndPassword(email, password)
  }

  return (
    <div className="w-screen h-screen bg-primaryGreen flex justify-center items-center">
        <form className="bg-white px-4 py-4 flex flex-col gap-y-3 shadow-md rounded-sm" onSubmit={handleCreateAccount}>
            {loading ? <span>Carregando...</span> : 
            <>
              <span>Criar nova conta</span>
              <TextField label="E-mail" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <TextField label="Senha" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <button className="bg-primaryBlue text-white rounded-sm px-4 py-4 text-lg">Criar conta</button>
              <div className="flex gap-x-2">
                <span>Já possui uma conta?</span>
                <Link to={'/'} className="text-primaryBlue underline hover:text-primaryOrange transition">Faça login</Link>
              </div>
              </>
            }
        </form>
    </div>
  )
}

export default Register