interface Icontacts {
  id: number;
  fullname: string;
  telephone: string;
  email: string;
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
  // setSearch: React.Dispatch<React.SetStateAction<string>>;
  // searchContact: Icontacts[];
  // search: string;
}

export type { Icontacts, IcontactsContext, IcontactsList };
