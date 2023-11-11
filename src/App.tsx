import Button from '@mui/material/Button';
import { useCallback, useState } from 'react';
import { faker } from '@faker-js/faker';

interface Worker {
  id: string
  name: string
}

function App() {
  const [workers, setWorkers] = useState<Worker[]>([])

  const addWorker = useCallback(() => {
    const newWorker: Worker = {id: faker.string.uuid(), name: faker.person.firstName()}
    setWorkers([...workers, newWorker])
  },[workers])

  const putFirstToLastPosition = () => {
    if(workers.length === 0) return
    const workersArray = [...workers]
    const firstWorker = workersArray.shift()
    workersArray.push(firstWorker!)
    setWorkers(workersArray)
  }

  return (
    <div className="w-sceen h-screen bg-red-300 flex flex-col items-center justify-center">
      <Button variant="outlined" onClick={addWorker}>Adicionar funcionário</Button>
      <ol>{workers.map((worker, index) => <li key={worker.id}>{index+1} {worker.name}</li>)}</ol>
      <Button variant="outlined" onClick={putFirstToLastPosition}>Próximo</Button>
    </div>
  )
}

export default App
