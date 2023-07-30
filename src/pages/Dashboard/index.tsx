import { Header } from "../../components/Header";
import { CreateContactModal } from "../../components/Modal/CreateContactModal";
import { ProfileModal } from "../../components/Modal/ProfileModal";
import { RenderCards } from "../../components/RenderCards";
import { useAuth, useContactAuth } from "../../hooks";
import styles from "./styles.module.scss";

const Dashboard = () => {
  const { createModal } = useContactAuth();
  const { userModal } = useAuth();

  return (
    <>
      <Header />
      {createModal && <CreateContactModal />}
      {userModal && <ProfileModal />}

      <main className={styles.container__dashboardMain}>
        <section>
          <RenderCards />
        </section>
      </main>
    </>
  );
};

export { Dashboard };
