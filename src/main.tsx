import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ModalContextProvider from './contexts/Modal/ModalContextProvider.tsx'
import WorkersContextProvider from './contexts/Workers/WorkersContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WorkersContextProvider>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
    </WorkersContextProvider>
  </React.StrictMode>,
)
