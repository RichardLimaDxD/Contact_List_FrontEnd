import { SeassonForm } from "../../components/Form/SeassonForm";
import imgGirl from "../../assets/MixMaster_cool_edm_girl_with_headphones_and_a_mask_in_new_york__6372324f-492a-4e5a-9e8d-4629e171c145.png";
import styles from "./styles.module.scss";

const Seasson = () => {
  return (
    <main className={styles.container__seassonMain}>
      <section>
        <SeassonForm />
        <img src={imgGirl} alt="Girl" />
      </section>
    </main>
  );
};

export { Seasson };
