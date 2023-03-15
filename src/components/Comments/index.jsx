import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './styles.module.scss'

export default function Comments() {
  return (
    <article className={styles.comments}>
      <img src="https://github.com/junior2a.png" alt="avatar" />

      <div className={styles.container}>
        <div className={styles.content}>
          <header>
            <div>
              <h3>Junior Alves
                <span>(você)</span>
              </h3>
              <time title="15 de março de 2023" dateTime='2023-15-03 15:46'>
                Cerca de 1h
              </time>
            </div>
            <button>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir
            <span>03</span>
          </button>
        </footer>
      </div>

    </article>
  )
}