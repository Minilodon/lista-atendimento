import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useState } from 'react';
interface Props {
    showModal: boolean;
    closeModal: () => void
}

export default function CreateModal(props: Props) {
    const {closeModal, showModal} = props
    const [userName, setUserName] = useState('')
    const [error, setError] = useState(false)

    const resetWorker = () => {
      setUserName('')
      setError(false)
      closeModal()
    }

  return (
    <div>
      <Modal
        open={showModal}
        onClose={resetWorker}
      >
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] bg-slate-100 shadow-lg p-3 flex flex-col'>
          <span className='mb-3'>
            Criar usuário
          </span>
          <div className='flex flex-col'>
            <TextField
              label="Nome"
              value={userName}
              error={error}
              onChange={(event) => {
                setError(false)
                setUserName(event.target.value)
              }}
              />
              {error && <span>Campo obrigatório</span>}
          </div>
          <div className='flex items-center justify-between'>
            <button onClick={() => {
              if(userName.length <= 0){
                setError(true)
                return
              }
              resetWorker()
            }}>Sim</button>
            <button onClick={resetWorker}>Cancelar</button>
          </div>
            </div>
      </Modal>
    </div>
  );
}
