import { useForm } from "react-hook-form";
import { Iusers } from "../../../interfaces/user.interfaces";
import { useAuth } from "../../../hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserSchema } from "../../../schemas/user.schema";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const SignupForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Iusers>({ resolver: zodResolver(createUserSchema) });

  const { signup } = useAuth();

  const submit = (formData: Iusers) => {
    signup(formData);
  };

  return (
    <form
      className={styles.container__signupForm}
      onSubmit={handleSubmit(submit)}
    >
      <h2>CREATE YOUR ACCOUNT</h2>
      <label htmlFor="fullname">Full name:</label>
      <input
        type="text"
        id="fullname"
        placeholder="Your full name..."
        {...register("fullname")}
      />
      {errors.fullname?.message && <p> * {errors.fullname.message}</p>}

      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        placeholder="Your Email..."
        {...register("email")}
      />
      {errors.email?.message && <p> * {errors.email.message}</p>}

      <label htmlFor="telephone">Telephone:</label>
      <input
        type="text"
        id="telephone"
        placeholder="Your telephone..."
        {...register("telephone")}
      />
      {errors.telephone?.message && <p> * {errors.telephone?.message}</p>}

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        placeholder="Create password..."
        {...register("password")}
      />
      {errors.password?.message && <p> * {errors.password?.message}</p>}

      <Link to="/">Already have an account? Login</Link>

      <button type="submit">SIGN IN</button>
    </form>
  );
};

export { SignupForm };
