import Button from '@mui/material/Button';
import { useState } from 'react';

interface Worker {
  id: string
  name: string
  position: number
}

function App() {
  const [workers, setWorkers] = useState<Worker[]>([{id: '1', name: 'Josias', position: 0}, {id: '2', name: 'Josie', position: 1}])
  return (
    <div className="w-sceen h-screen bg-red-300 flex flex-col items-center justify-center">
      <Button variant="outlined">Adicionar funcionário</Button>
      <ol>{workers.map((worker) => <li key={worker.id}>{worker.name}</li>)}</ol>
    </div>
  )
}

export default App
