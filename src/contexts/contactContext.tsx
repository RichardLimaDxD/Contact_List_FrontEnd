import { createContext, useEffect, useState } from "react";
import { TdefaultProps } from "../interfaces/user.interfaces";
import { api } from "../services/api";
import { Icontacts, IcontactsContext } from "../interfaces/contacts.interfaces";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ContactContext = createContext({} as IcontactsContext);

const ContactProvider = ({ children }: TdefaultProps) => {
  const [contact, setContact] = useState<Icontacts[]>([]);

  const [createModal, setCreateModal] = useState<boolean>(false);

  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const [selectedContactId, setSelectedContactId] = useState<number | null>(
    null
  );

  const [search, setSearch] = useState<string>("");

  /*
  const searchContact = contact.filter((contacts) =>
    search === ""
      ? contacts
      : contacts.fullname.toLowerCase().includes(search.toLowerCase())
  );
  */

  const token = localStorage.getItem("@TOKEN");

  const navigate = useNavigate();

  useEffect(() => {
    const loadContacts = async () => {
      if (!token) {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@serialUser");
        navigate("/");
        return;
      }

      try {
        const response = await api.get("/contacts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setContact(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createContact = async (formData: Icontacts) => {
    try {
      const { data } = await api.post("/contacts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setContact(data.id);

      toast.success("New contact added!");

      await retrieveContacts();
    } catch (error) {
      console.log(error);
      toast.error("Error!Please check your information");
    }
  };

  const deleteContact = async (id: number) => {
    try {
      await api.delete(`contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = contact.filter((contacts) => contacts.id !== id);

      setContact(data);

      await retrieveContacts();

      toast.success("Contact deleted!");
    } catch (error) {
      toast.error("Error!Please check your information!");
      console.error(error);
      console.log(id);
    }
  };

  const retrieveContacts = async () => {
    try {
      const response = await api.get("/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setContact(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Error!Please check your information!");
    }
  };

  const patchContact = async (formData: Icontacts, id: number) => {
    try {
      const response = await api.patch(`/contacts/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setContact(response.data);
      await retrieveContacts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contact,
        createContact,
        deleteContact,
        patchContact,
        retrieveContacts,
        createModal,
        setCreateModal,
        setSearch,
        search,
        deleteModal,
        setDeleteModal,
        selectedContactId,
        setSelectedContactId,
      }}
    >
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProvider };
