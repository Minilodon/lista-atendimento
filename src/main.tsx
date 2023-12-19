import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthContextProvider from './contexts/Auth/AuthContextProvider.tsx'
import Routes from './Routes.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  </React.StrictMode>,
)
