import type { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";

export default function Home(): ReactElement {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Alex !</h1>
        <p className={styles.subtitle}>
          Welcome to my CV website. I'm a fullstack developer passionate about clean code,
          beautiful design, and continuous learning.I am a creative person, with a strong intrinsic motivation and a constant curiosity towards new technological trends. I claim my confidence in using any new programming language and technological trend. I believe that adaptability is essential for success in the IT industry.
        </p>
        <div className={styles.buttons}>
          <button onClick={() => navigate("/projects")}>My Projects</button>
          <button onClick={() => navigate("/about")}>About Me</button>
        </div>
      </div>
    </div>
  );
}
