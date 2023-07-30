import { useContactAuth } from "../../hooks";
import { Icontacts } from "../../interfaces/contacts.interfaces";
import { CreateCards } from "./CreateCards";
import styles from "./styles.module.scss";

const RenderCards = () => {
  const { contact } = useContactAuth();

  return (
    <>
      <ul className={styles.container__renderCards}>
        {contact?.map((contacts: Icontacts) => {
          return <CreateCards contacts={contacts} key={contacts.id} />;
        })}
      </ul>
    </>
  );
};
export { RenderCards };
