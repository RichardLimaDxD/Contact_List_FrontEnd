import { useContactAuth } from "../../../hooks";
import styles from "./styles.module.scss";

const DeleteContactModal = () => {
  const {
    setDeleteModal,
    deleteContact,
    selectedContactId,
    setSelectedContactId,
  } = useContactAuth();

  const handleDelete = () => {
    deleteContact(selectedContactId);
    setSelectedContactId(null);
  };

  return (
    <dialog className={styles.container__deleteModal}>
      <div>
        <button onClick={() => setDeleteModal(false)}>X</button>
      </div>

      <button onClick={() => handleDelete()}>Delete contact</button>
    </dialog>
  );
};

export { DeleteContactModal };
