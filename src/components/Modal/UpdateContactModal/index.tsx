import { useContactAuth } from "../../../hooks";
import { UpdateForm } from "../../Form/ContactForms/UpdateForm";
import styles from "./styles.module.scss";

const UpdateContactModal = () => {
  const { setUpdateModal } = useContactAuth();

  return (
    <dialog className={styles.container__updateModal}>
      <div>
        <button onClick={() => setUpdateModal(false)}>X</button>
      </div>

      <h2>UPDATE CONTACT</h2>

      <UpdateForm />
    </dialog>
  );
};
export { UpdateContactModal };
