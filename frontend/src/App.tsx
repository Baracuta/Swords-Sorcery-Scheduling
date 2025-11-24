import styles from "../src/css_modules/app.module.css"

function App() {

  return (
    <>
      <div className={styles.app}>

        <div className={styles.topbar}>
          <h1>Topbar</h1>
        </div>

        <div className={styles.main}>
          <div className={styles.sidebar}>
            <h2>Sidebar</h2>
          </div>

          <div className={styles.content}>
            <h1>Swords, Sorcery, Scheduling</h1>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
