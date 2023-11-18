import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useWorkersContext } from '../../../contexts/Workers/WorkersContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface Props {
    showModal: boolean;
    closeModal: () => void
}

export default function CreateModal(props: Props) {
    const {closeModal, showModal} = props
    const { setSelectedWorker } = useWorkersContext()

    const resetWorker = () => {
      setSelectedWorker(undefined)
      closeModal()
    }

  return (
    <div>
      <Modal
        open={showModal}
        onClose={resetWorker}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Criar usuário
          </Typography>
          <div>
            <span>Nome</span>
            <input />
          </div>
          <div className='flex items-center justify-between'>
            <button onClick={() => {
              resetWorker()
            }}>Sim</button>
            <button onClick={resetWorker}>Cancelar</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
