import { createContext, useEffect, useState } from "react";
import { TdefaultProps } from "../interfaces/user.interfaces";
import { api } from "../services/api";
import { Icontacts } from "../interfaces/contacts.interfaces";

const ContactContext = createContext({});

const ContactProvider = ({ children }: TdefaultProps) => {
  const [contact, setContact] = useState<[]>([]);

  const token = localStorage.getItem("@Token");

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const { data } = await api.get("/contacts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContact(data);
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

      await retrieveContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id: number) => {
    try {
      await api.delete(`clients/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const findContact: any = contact.filter(
        (contacts: Icontacts) => contacts.id !== id
      );

      setContact(findContact);
    } catch (error) {
      console.log(error);
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
    }
  };

  return (
    <ContactContext.Provider value={{ contact, createContact, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProvider };
