import { useForm } from "react-hook-form";

const SeassonForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form>
      <label htmlFor="emailSeasson">Email:</label>
      <input type="text" placeholder="Your email..." />

      <label htmlFor=""></label>
      <input type="text" />

      <button>SIGN UP</button>
    </form>
  );
};

export { SeassonForm };
