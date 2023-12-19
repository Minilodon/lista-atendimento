import { TextField } from "@mui/material"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../services/firebaseConfig";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/Auth/AuthContext";

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [
    createUserWithEmailAndPassword,
    loading,
  ] = useCreateUserWithEmailAndPassword(auth);
  const { currentUser } = useAuthContext()
  const navigate = useNavigate()

  const handleCreateAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(passwordConfirmation !== password) {
      setPasswordError('As senhas não são iguais')
      return
    }
    try {
      await createUserWithEmailAndPassword(email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-screen h-screen bg-primaryGreen flex justify-center items-center">
        <form className="bg-white px-4 py-4 flex flex-col gap-y-3 shadow-md rounded-sm" onSubmit={handleCreateAccount}>
            {loading ? <span>Carregando...</span> : 
            <>
              <span>Criar nova conta</span>
              <TextField label="E-mail" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <TextField label="Senha" variant="outlined" type="password" value={password} onChange={(e) => {
                setPassword(e.target.value)
                setPasswordError('')
                }}/>
              <TextField label="Confirmação de senha" variant="outlined" type="password" value={passwordConfirmation} onChange={(e) => {
                setPasswordError('')
                setPasswordConfirmation(e.target.value)}}/>
              {!!passwordError && <span>{passwordError}</span>}
              <button className="bg-primaryBlue text-white rounded-sm px-4 py-4 text-lg">Criar conta</button>
              <div className="flex gap-x-2">
                <span>Já possui uma conta?</span>
                <Link to={'/'} className="text-primaryBlue underline hover:text-primaryOrange transition">Faça login</Link>
              </div>
              <button onClick={(e) => {
                e.preventDefault()
                console.log(currentUser)
              }}>Veja current user</button>
              </>
            }
        </form>
    </div>
  )
}

export default Register