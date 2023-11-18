import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useModalContext } from '../../../contexts/Modal/ModalContext';

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

export default function DeleteModal(props: Props) {
    const {closeModal, showModal} = props
    const { selectedWorker } = useModalContext()
  return (
    <div>
      <Modal
        open={showModal}
        onClose={closeModal}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Remover {selectedWorker?.name} da lista?
          </Typography>
          <div className='flex items-center justify-between'>
            <button>Sim</button>
            <button onClick={closeModal}>Cancelar</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
