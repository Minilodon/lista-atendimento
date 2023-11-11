import Button from '@mui/material/Button';
import { useCallback, useState } from 'react';
import { faker } from '@faker-js/faker';

interface Worker {
  id: string
  name: string
}

function App() {
  const [workers, setWorkers] = useState<Worker[]>([{id: '1', name: 'Josias'}, {id: '2', name: 'Josie'}])

  const addWorker = useCallback(() => {
    const newWorker: Worker = {id: faker.string.uuid(), name: faker.person.firstName()}
    setWorkers([...workers, newWorker])
  },[workers])

  return (
    <div className="w-sceen h-screen bg-red-300 flex flex-col items-center justify-center">
      <Button variant="outlined" onClick={addWorker}>Adicionar funcionário</Button>
      <ol>{workers.map((worker) => <li key={worker.id}>{worker.name}</li>)}</ol>
    </div>
  )
}

export default App
