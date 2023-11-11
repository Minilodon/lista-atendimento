import Button from '@mui/material/Button';
import { useCallback, useState } from 'react';
import { faker } from '@faker-js/faker';
import Fab from '@mui/material/Fab';
import ClearIcon from '@mui/icons-material/Clear';
import { useModalContext } from './contexts/Modal/ModalContext';

interface Worker {
  id: string
  name: string
}

function App() {
  const {openDeleteModal} = useModalContext()
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

  const deleteWorker = (workerId: string) => {
    const workersArray = [...workers]
    const filteredWorkers = workersArray.filter(({id}) => workerId !== id)
    setWorkers(filteredWorkers)
  }

  return (
    <div className="w-sceen h-screen bg-red-300 flex flex-col items-center justify-center">
      <Button variant="outlined" onClick={addWorker}>Adicionar funcionário</Button>
      <ol>
        {workers.map((worker, index) => 
          <li key={worker.id} className='flex items-center gap-x-2'>
            <span>{index+1}</span>
            <span>{worker.name}</span>
            <Fab color="error" aria-label="deletar" size='small' onClick={openDeleteModal} style={{zIndex: 0}}>
              <ClearIcon />
            </Fab>
          </li>
        )}
      </ol>
      <Button variant="contained" onClick={putFirstToLastPosition}>Próximo</Button>
    </div>
  )
}

export default App
