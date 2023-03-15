import Aside from "./components/aside"
import Header from "./components/Header/"

import styles from './App.module.scss'
import Posts from "./components/Posts"

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Aside />
        <main>
          <Posts />
        </main>
      </div>
    </div>
  )
}

export default App
