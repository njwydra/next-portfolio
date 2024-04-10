import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.description}>
      <div className={styles.colorBar}></div>
      <h1>Nick Wydra</h1>
      <h2>Senior Software Engineer: Tech Lead</h2>
      <p className={styles.city}>Chicago, IL</p>
      <div className={styles.links}>
        <a href="https://linkedin.com/in/nick-wydra" target="_blank">
          <img height={24} width={24} src="/linkedin.svg" alt="Email" />
        </a>
        <a href="https://github.com/njwydra" target="_blank">
          <img height={24} width={24} src="/github.svg" alt="Email" />
        </a>
        <a href="mailto:njwydra@gmail.com">
          <img height={24} width={24} src="/mail.svg" alt="Email" />
        </a>
      </div>
      <div className={styles.colorBar}></div>
    </div>
  );
}
