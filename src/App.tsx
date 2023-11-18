import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import ClearIcon from '@mui/icons-material/Clear';
import { useModalContext } from './contexts/Modal/ModalContext';
import { useWorkersContext } from './contexts/Workers/WorkersContext';


function App() {
  
  const {openDeleteModal} = useModalContext()
  const {setSelectedWorker, workers, addWorker, putFirstToLastPosition} = useWorkersContext()


  return (
    <div className="w-sceen h-screen bg-red-300 flex flex-col items-center justify-center">
      <Button variant="outlined" onClick={addWorker}>Adicionar funcionário</Button>
      <ol>
        {workers.map((worker, index) => 
          <li key={worker.id} className='flex items-center gap-x-2'>
            <span>{index+1}</span>
            <span>{worker.name}</span>
            <Fab color="error" aria-label="deletar" size='small' onClick={() => {
              setSelectedWorker(worker)
              openDeleteModal()
            }} style={{zIndex: 0}}>
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
