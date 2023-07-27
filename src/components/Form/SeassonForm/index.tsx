import { useForm } from "react-hook-form";
import { Iseasson } from "../../../interfaces/user.interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { seassonUserSchema } from "../../../schemas/user.schema";
import { useAuth } from "../../../hooks";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const SeassonForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iseasson>({ resolver: zodResolver(seassonUserSchema) });

  const { seasson } = useAuth();

  const submit = (formData: Iseasson) => {
    seasson(formData);
  };

  return (
    <form
      className={styles.container__seassonForm}
      onSubmit={handleSubmit(submit)}
    >
      <h2>WELCOME BACK</h2>
      <label htmlFor="emailSeasson">Email:</label>
      <input
        type="text"
        id="emailSeasson"
        placeholder="Your email..."
        {...register("email")}
      />
      {errors.email?.message && <p> * {errors.email.message}</p>}

      <label htmlFor="passwordSeasson">Password:</label>
      <input
        type="text"
        id="passwordSeasson"
        placeholder="Your password"
        {...register("password")}
      />
      {errors.password?.message && <p> * {errors.password.message}</p>}

      <Link to="/signup">Don't have an account ? sign up</Link>

      <button type="submit">SIGN UP</button>
    </form>
  );
};

export { SeassonForm };
