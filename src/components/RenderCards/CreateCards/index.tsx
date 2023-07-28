import { IcontactsList } from "../../../interfaces/contacts.interfaces";
import styles from "./styles.module.scss";

const CreateCards = ({ contacts }: IcontactsList) => {
  return (
    <li className={styles.container__createCard}>
      <div>
        <h3>{contacts.fullname[0]}</h3>
      </div>
      <h2>{contacts.fullname}</h2>
    </li>
  );
};

export { CreateCards };
