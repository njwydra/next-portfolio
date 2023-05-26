import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <ul className={styles.circles}>
        <li></li>
        <li></li>
      </ul>
      <div className={styles.description}>
        <h1>
          Nick Wydra
        </h1>
        <a href='mailto:njwydra@gmail.com'>njwydra@gmail.com</a>
      </div>
    </main>
  )
}
