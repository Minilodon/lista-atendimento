import React, { ReactNode, createContext, useCallback, useState } from "react";
import DeleteModal from "../../components/Modals/DeleteModal/DeleteModal";
import CreateModal from "../../components/Modals/CreateModal/CreateModal";
import WorkersDrawer from "../../components/Drawers/WorkersDrawer/WorkersDrawer";

interface ModalContextValue {
	openDeleteModal: () => void;
	openCreateModal: () => void;
	openWorkersDrawer: () => void;
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
	const [showWorkersDrawer, setShowWorkersDrawer] = useState(false);

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

	const openWorkersDrawer = useCallback(() => {
		setShowWorkersDrawer(true);
	}, []);
	const closeWorkersDrawer = () => {
		setShowWorkersDrawer(false);
	};

	const value: ModalContextValue = React.useMemo(
		() => ({
			openDeleteModal,
			openCreateModal,
			openWorkersDrawer,
		}),
		[openCreateModal, openDeleteModal, openWorkersDrawer],
	);

	return (
		<ModalContext.Provider value={value}>
			<DeleteModal closeModal={closeDeleteModal} showModal={showDeleteModal} />
			<CreateModal closeModal={closeCreateModal} showModal={showCreateModal} />
			<WorkersDrawer
				closeDrawer={closeWorkersDrawer}
				showDrawer={showWorkersDrawer}
			/>
			{children}
		</ModalContext.Provider>
	);
}
