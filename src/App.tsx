import WorkersList from './components/Lists/Workers/WorkersList';
import ServiceList from './components/Lists/Service/ServiceList';


function App() {
  
  return (
    <div className="w-sceen h-screen bg-red-300 flex">
      <WorkersList />
      <ServiceList />
    </div>
  )
}

export default App
