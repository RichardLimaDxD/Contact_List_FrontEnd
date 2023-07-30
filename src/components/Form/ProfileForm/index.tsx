import { useForm } from "react-hook-form";
import { Iusers } from "../../../interfaces/user.interfaces";
import { useAuth } from "../../../hooks";

import styles from "./styles.module.scss";

const ProfileForm = () => {
  const { handleSubmit, register } = useForm<Iusers>();

  const { patchProfile } = useAuth();

  const submit = (formData: Iusers) => {
    patchProfile(formData);
  };

  return (
    <form
      className={styles.container__profileForm}
      onSubmit={handleSubmit(submit)}
    >
      <label htmlFor="fullname">Full name:</label>
      <input
        type="text"
        id="fullname"
        placeholder="Your full name..."
        {...register("fullname")}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        placeholder="Your Email..."
        {...register("email")}
      />

      <label htmlFor="telephone">Telephone:</label>
      <input
        type="text"
        id="telephone"
        placeholder="Your telephone..."
        {...register("telephone")}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        placeholder="Create password..."
        {...register("password")}
      />

      <button type="submit">MODIFY</button>
    </form>
  );
};

export { ProfileForm };
