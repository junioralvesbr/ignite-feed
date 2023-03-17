import Aside from "./components/aside"
import Header from "./components/Header/"

import styles from './App.module.scss'
import Posts from "./components/Posts"

import data from './data/data'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Aside />
        <main>
          {data?.map(item => (
            <Posts
              key={item.id}
              author={item.author}
              content={item.content}
              links={item.links}
              publishedAt={item.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
