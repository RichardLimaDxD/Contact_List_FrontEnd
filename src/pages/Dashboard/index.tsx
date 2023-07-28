import { Header } from "../../components/Header";
import { CreateContactModal } from "../../components/Modal/CreateContactModal";
import { RenderCards } from "../../components/RenderCards";
import { useContactAuth } from "../../hooks";
import styles from "./styles.module.scss";

const Dashboard = () => {
  const { createModal } = useContactAuth();

  return (
    <>
      <Header />
      {createModal && <CreateContactModal />}
      <main className={styles.container__dashboardMain}>
        <section>
          <RenderCards />
        </section>
      </main>
    </>
  );
};

export { Dashboard };
