import { useAuth } from "../../../hooks";
import { ProfileForm } from "../../Form/ProfileForm";
import styles from "./styles.module.scss";

const ProfileModal = () => {
  const { setUserModal } = useAuth();

  return (
    <dialog className={styles.container__profileModal}>
      <div>
        <button onClick={() => setUserModal(false)}>X</button>
      </div>

      <h2>SETTINGS</h2>

      <ProfileForm />
    </dialog>
  );
};

export { ProfileModal };
