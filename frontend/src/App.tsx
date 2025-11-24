import styles from "../src/css_modules/app.module.css"
import Calendar from "./components/calendar"

function App() {

  return (
    <>
      <div className={styles.app}>

        <div className={styles.topbar}>
          <div className={styles.pfp}>
            <h2>PFP</h2>
          </div>

          <div className={styles.titles}>
            <h1 className={styles.title}>Swords, Sorcery, Scheduling</h1>
            <h2 className={styles.subtitle}>Manage your RPG sessions with ease</h2>
          </div>

          <div className={styles.controls}>
            <h2>Controls</h2>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.sidebar}>
            <h1>Sidebar</h1>
          </div>

          <div className={styles.content}>
            <Calendar />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
