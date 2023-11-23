import WorkersContextProvider from './Workers/WorkersContextProvider'
import ModalContextProvider from './Modal/ModalContextProvider'
import App from '../App'
import { theme } from '../theme'
import { ThemeProvider } from '@mui/material'

function AppProvider() {
  return (
    <ThemeProvider theme={theme}>
    <WorkersContextProvider>
        <ModalContextProvider>
            <App />
        </ModalContextProvider>
    </WorkersContextProvider>
    </ThemeProvider>
  )
}

export default AppProvider