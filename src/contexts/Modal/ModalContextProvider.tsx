import React, { ReactNode, createContext, useState } from 'react';
import DeleteModal from '../../components/Modals/DeleteModal/DeleteModal';

interface ModalContextValue {
  openDeleteModal: () => void;
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
    
  const openDeleteModal = () => {setShowDeleteModal(true)}
  const closeDeleteModal = () => {
    setShowDeleteModal(false)
  }

  const value: ModalContextValue = React.useMemo(() => ({
    openDeleteModal,
  }), []);

  return (
    <ModalContext.Provider value={value}>
        <DeleteModal closeModal={closeDeleteModal} showModal={showDeleteModal}/>
      {children}
    </ModalContext.Provider>
  );
}
