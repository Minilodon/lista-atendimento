import React, { ReactNode, createContext, useCallback, useState } from "react";
import DeleteModal from "../../components/Modals/DeleteModal/DeleteModal";
import CreateModal from "../../components/Modals/CreateModal/CreateModal";

interface ModalContextValue {
	openDeleteModal: () => void;
	openCreateModal: () => void;
}

export const ModalContext = createContext<ModalContextValue>(
	{} as ModalContextValue,
);

type ModalContextProviderProps = {
	children: ReactNode;
};

export default function ModalContextProvider(props: ModalContextProviderProps) {
	const { children } = props;
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showCreateModal, setShowCreateModal] = useState(false);

	const openDeleteModal = useCallback(() => {
		setShowDeleteModal(true);
	}, []);
	const closeDeleteModal = () => {
		setShowDeleteModal(false);
	};

	const openCreateModal = useCallback(() => {
		setShowCreateModal(true);
	}, []);
	const closeCreateModal = () => {
		setShowCreateModal(false);
	};

	const value: ModalContextValue = React.useMemo(
		() => ({
			openDeleteModal,
			openCreateModal,
		}),
		[openCreateModal, openDeleteModal],
	);

	return (
		<ModalContext.Provider value={value}>
			<DeleteModal closeModal={closeDeleteModal} showModal={showDeleteModal} />
			<CreateModal closeModal={closeCreateModal} showModal={showCreateModal} />
			{children}
		</ModalContext.Provider>
	);
}
