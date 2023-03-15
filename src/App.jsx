import Aside from "./components/aside"
import Header from "./components/Header/"

import styles from './App.module.scss'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Aside />
      </div>
    </div>
  )
}

export default App
