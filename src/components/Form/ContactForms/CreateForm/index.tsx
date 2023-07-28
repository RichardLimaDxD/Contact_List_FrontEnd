import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContactAuth } from "../../../../hooks";
import { createContactSchema } from "../../../../schemas/contact.schema";
import { Icontacts } from "../../../../interfaces/contacts.interfaces";
import styles from "./styles.module.scss";

const CreateForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Icontacts>({
    resolver: zodResolver(createContactSchema),
  });

  const { createContact } = useContactAuth();

  const submit = (formData: Icontacts) => {
    createContact(formData);
  };

  return (
    <form
      className={styles.container__createFormModal}
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

      <button type="submit">Create contact</button>
    </form>
  );
};

export { CreateForm };
