import React, { ReactNode, createContext, useState } from 'react';
import DeleteModal from '../../components/Modals/DeleteModal/DeleteModal';
import { Worker } from '../../types/Worker';

interface ModalContextValue {
  openDeleteModal: () => void;
  selectedWorker: Worker | undefined;
  setSelectedWorker: React.Dispatch<React.SetStateAction<Worker | undefined>>
}

export const ModalContext = createContext<ModalContextValue>(
  {} as ModalContextValue,
);

type ModalContextProviderProps = {
  children: ReactNode;
};

export default function ModalContextProvider(props: ModalContextProviderProps) {
  const { children } = props;
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedWorker, setSelectedWorker] = useState<Worker>()
    
  const openDeleteModal = () => {setShowDeleteModal(true)}
  const closeDeleteModal = () => {
    setSelectedWorker(undefined)
    setShowDeleteModal(false)
  }

  const value: ModalContextValue = React.useMemo(() => ({
    openDeleteModal,
    selectedWorker,
    setSelectedWorker
  }), [selectedWorker]);

  return (
    <ModalContext.Provider value={value}>
        <DeleteModal closeModal={closeDeleteModal} showModal={showDeleteModal}/>
      {children}
    </ModalContext.Provider>
  );
}
