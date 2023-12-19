import WorkersList from './components/Lists/Workers/WorkersList';
import ServiceList from './components/Lists/Service/ServiceList';
import WorkersContextProvider from './contexts/Workers/WorkersContextProvider';
import ModalContextProvider from './contexts/Modal/ModalContextProvider';


function App() {
  return (
    <WorkersContextProvider>
      <ModalContextProvider>

    <div className="w-sceen h-screen bg-red-300 flex">
      <WorkersList />
      <ServiceList />
    </div>
      </ModalContextProvider>
    </WorkersContextProvider>
  )
}

export default App
