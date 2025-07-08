import type { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.scss";

export default function About(): ReactElement {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.text}>
          I am a creative person, with a strong intrinsic motivation and a
          constant curiosity towards new technological trends. I claim my
          confidence in using any new programming language and technological
          trend. I believe that adaptability is essential for success in the IT
          industry.
        </p>
        <div>
          <h2 className={styles.subtitle1}>Education</h2>
          <h2 className={styles.subtitle2}>
            University Politehnica of Bucharest
          </h2>
          <p className={styles.text}>
            • Bachelor Degree <br></br>• Solid foundations in Information and
            Communication Technology <br></br>• Valedictorian in
            Telecommunications Networks and Software<br></br>• Outstanding
            performance in the IT field <br></br>• Security course held by SRI,
            with remarkable results
          </p>
          <h2 className={styles.subtitle2}>LT Nicolae Iorga</h2>
          <p className={styles.text}>
            • IT introduction <br></br>• High School Diploma <br></br>
          </p>

          <div className="pb-5">
            <h2 className={styles.subtitle1}>Skills</h2>
            <h2 className={styles.text2}>NODEJS</h2>
            <h2 className={styles.text2}>REACTJS</h2>
            <h2 className={styles.text2}>EXPRESSJS</h2>
            <h2 className={styles.text2}>MYSQL</h2>
            <h2 className={styles.text2}>POSTGRESQL</h2>
            <h2 className={styles.text2}>MONGODB</h2>
            <h2 className={styles.text2}>NETWORKS</h2>
            <h2 className={styles.text2}>CLOUD SERVICES</h2>
            <h2 className={styles.text2}>OPERATING SYSTEMS</h2>
            <h2 className={styles.text2}>K8S</h2>
            <h2 className={styles.text2}>BLOCKCHAIN</h2>
            <h2 className={styles.text2}>SOLIDITY</h2>
          </div>
        </div>

        <div className={styles.buttons}>
          <button onClick={() => navigate("/projects")}>My Projects</button>
          <button onClick={() => navigate("/")}>Home</button>
        </div>
      </div>
    </div>
  );
}
