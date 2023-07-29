import { IcontactsList } from "../../../interfaces/contacts.interfaces";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import styles from "./styles.module.scss";
import { useContactAuth } from "../../../hooks";
import { DeleteContactModal } from "../../Modal/DeleteContactModal";

const CreateCards = ({ contacts }: IcontactsList) => {
  const { deleteModal, setDeleteModal, setSelectedContactId } =
    useContactAuth();

  const handleDeleteClick = () => {
    setSelectedContactId(contacts.id);
    setDeleteModal(true);
  };

  return (
    <>
      <li className={styles.container__createCard}>
        {deleteModal && <DeleteContactModal />}
        <div className={styles.container__divName}>
          <h3>{contacts.fullname[0]}</h3>
        </div>
        <h2>Full name: {contacts.fullname}</h2>
        <p>Email: {contacts.email}</p>
        <span>Telephone: {contacts.telephone}</span>
        <div className={styles.container__divButtons}>
          <button>
            <BsFillTrashFill onClick={() => handleDeleteClick()} />
          </button>

          <button>
            <AiFillEdit />
          </button>
        </div>
      </li>
    </>
  );
};

export { CreateCards };
