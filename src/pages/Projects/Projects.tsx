import type { ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Projects.module.scss";

export default function Projects(): ReactElement {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Casio Education</h1>
        <p className={styles.subtitle}>
          • Maintenance and optimization of cluster (K8S)
        </p>
        <p className={styles.subtitle}>
          • FullStack development for new platform functionalities
        </p>
        <p className={styles.subtitle}>• Database administration</p>
        <p className={styles.subtitle}>
          • Integration with Salesforce database
        </p>
        <p className={styles.subtitle}>• Sanity Studio maintenance</p>
        <p className={styles.subtitle}>• Creating scripts for various tasks</p>
        <div className={styles.buttons}>
          <button
            onClick={() =>
              (window.location.href = "https://casio-education.eu/")
            }
          >
            View &gt;
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>Evoload</h1>
        <p
          className={styles.subtitle}
          onClick={() =>
            (window.location.href = "https://platform.evoload.co/login")
          }
        >
          • Engineered the Freight Exchange platform at Evoload, enhancing
          logistics efficiency
          <a href="https://platform.evoload.co/"> Visit&nbsp;&gt;</a>
        </p>
        <p className={styles.subtitle}>
          • Spearheaded the development of the Evoload Staking platform,
          optimizing digital asset management.
          <a href="https://staking.evoload.co/"> Visit&nbsp;&gt;</a>
        </p>
        <p className={styles.subtitle}>
          • Innovated the Evoload Sales application to streamline pre-sale
          processes.
          <a href="https://presale.evoload.co/"> Visit&nbsp;&gt;</a>
        </p>
        <p className={styles.subtitle}>
          • Architected the Evoload Recruitment portal to automate talent
          acquisition .<a href="https://portal.evoload.co/"> Visit&nbsp;&gt;</a>
        </p>
        <p className={styles.subtitle}>
          • Crafted advanced asset analysis scripts, driving data-driven
          decision-making.
        </p>
        <p className={styles.subtitle}>
          • Proficient in cutting-edge technologies: NodeJS, ReactJS, SocketIO,
          Sequelize, MySQL.
        </p>
        <p className={styles.subtitle}>
          • Specialized in Smart Contract development, ensuring secure
          blockchain transactions.
        </p>
        <p className={styles.subtitle}>
          • Integrated Web3 solutions, pioneering decentralized application
          connectivity.
        </p>
        <p className={styles.subtitle}>
          • Designed robust Web3 project architectures, setting industry
          standards.
        </p>
        <p className={styles.subtitle}>
          • Implemented Mobile App integration, delivering seamless
          cross-platform user experiences.
        </p>

        <div className={styles.buttons}>
          <button
            onClick={() => (window.location.href = "https://evoload.co/")}
          >
            View &gt;
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>SecureWorks</h1>
        <p className={styles.subtitle}>
          • Responsibilities included analyzing security incidents, network
          scenarios, identifying threats, creating rules for client's networks,
          and building scripts for automated tasks.
        </p>
      </div>

      <div className={styles.buttonsCenter}>
        <button onClick={() => navigate("/about")}>About Me</button>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
}
