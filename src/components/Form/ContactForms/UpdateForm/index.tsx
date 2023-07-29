import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Icontacts } from "../../../../interfaces/contacts.interfaces";
import { createContactSchema } from "../../../../schemas/contact.schema";
import { useContactAuth } from "../../../../hooks";
import styles from "./styles.module.scss";

const UpdateForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Icontacts>({
    resolver: zodResolver(createContactSchema),
  });

  const { patchContact, selectedContactId } = useContactAuth();

  const idContact: number = selectedContactId;

  console.log(idContact);

  const submit = (formData: Icontacts) => {
    patchContact(formData, idContact);
  };

  return (
    <form
      className={styles.container__updateFormModal}
      onSubmit={handleSubmit(submit)}
    >
      <label htmlFor="fullnamecreate">Full name:</label>
      <input
        type="text"
        id="fullnamecreate"
        placeholder="Your full name..."
        {...register("fullname")}
      />
      {errors.fullname?.message && <p> * {errors.fullname.message}</p>}

      <label htmlFor="emailcreate">Email:</label>
      <input
        type="text"
        id="emailcreate"
        placeholder="Your Email..."
        {...register("email")}
      />
      {errors.email?.message && <p> * {errors.email.message}</p>}

      <label htmlFor="telephonecreate">Telephone:</label>
      <input
        type="text"
        id="telephonecreate"
        placeholder="Your telephone..."
        {...register("telephone")}
      />
      {errors.telephone?.message && <p> * {errors.telephone?.message}</p>}

      <button type="submit">Update contact</button>
    </form>
  );
};

export { UpdateForm };
