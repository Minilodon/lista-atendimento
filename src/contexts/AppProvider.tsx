import WorkersContextProvider from './Workers/WorkersContextProvider'
import ModalContextProvider from './Modal/ModalContextProvider'
import App from '../App'

function AppProvider() {
  return (
    <WorkersContextProvider>
        <ModalContextProvider>
            <App />
        </ModalContextProvider>
    </WorkersContextProvider>
  )
}

export default AppProvider