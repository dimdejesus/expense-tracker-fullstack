import { useState } from "react";

//get the important properties of modal to avoid long code
const useModal = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const handleOpen = () => setModalOpen(true);

	const handleClose = () => setModalOpen(false);

	return {
		modalOpen,
		handleOpen,
		handleClose,
	};
};

export default useModal;
