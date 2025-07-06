import type { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.scss";

export default function About(): ReactElement {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Few words about me</h1>
        <p className={styles.subtitle}>
          I am a creative person, with a strong intrinsic motivation and a constant curiosity towards new technological trends. I claim my confidence in using any new programming language and technological trend. I believe that adaptability is essential for success in the IT industry.
        </p>
        <div className={styles.buttons}>
          <button onClick={() => navigate("/projects")}>My Projects</button>
          <button onClick={() => navigate("/")}>Home</button>
        </div>
      </div>
    </div>
  );
}
