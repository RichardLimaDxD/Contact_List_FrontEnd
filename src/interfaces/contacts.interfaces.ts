/* eslint-disable @typescript-eslint/no-explicit-any */
interface Icontacts {
  id: number;
  fullname: string;
  telephone: string;
  email: string;
}

interface Iiddefault {
  id: number;
}

interface IcontactsList {
  contacts: Icontacts;
}

interface IcontactsContext {
  patchContact: (formData: Icontacts, id: number) => Promise<void>;
  retrieveContacts: () => Promise<void>;
  deleteContact: (id: number) => Promise<void>;
  createContact: (formData: Icontacts) => Promise<void>;
  contact: Icontacts[] | [];
  createModal: boolean;
  setCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteModal: boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedContactId: number | null | any;
  setSelectedContactId: React.Dispatch<React.SetStateAction<number | null>>;
  updateModal: boolean;
  setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export type { Icontacts, IcontactsContext, Iiddefault, IcontactsList };
