import { SignupForm } from "../../components/Form/SignupForm";
import girlWithHeadphones from "../../assets/MixMaster_cool_edm_girl_with_headphones_and_a_mask_in_new_york__b10ea693-4ab2-4b86-9098-e9d508861de1.png";
import styles from "./styles.module.scss";

const Signup = () => {
  return (
    <main className={styles.container__signupMain}>
      <section>
        <SignupForm />
        <img src={girlWithHeadphones} alt="girl_with_headphones" />
      </section>
    </main>
  );
};

export { Signup };
