import { useContactAuth } from "../../../hooks";
import { CreateForm } from "../../Form/ContactForms/CreateForm";
import styles from "./styles.module.scss";

const CreateContactModal = () => {
  const { setCreateModal } = useContactAuth();

  return (
    <dialog className={styles.container__createModal}>
      <div>
        <button onClick={() => setCreateModal(false)}>X</button>
      </div>

      <h2>CREATE CONTACT</h2>

      <CreateForm />
    </dialog>
  );
};

export { CreateContactModal };
