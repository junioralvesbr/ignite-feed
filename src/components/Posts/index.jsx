import Avatar from '../Avatar'
import Comments from '../Comments'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <article className={styles.posts}>

      <header className={styles.header}>
        <div className={styles.profile}>
          <Avatar hasBorder src="https://github.com/junior2a.png" />
          <div>
            <h3>Jane Cooper</h3>
            <span>Dev Front-End</span>
          </div>
        </div>
        <time title="15 de março de 2023" dateTime='2023-15-03'>
          Públicado a 1h
        </time>
      </header>

      <main>
        <section>
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
          </p>
          <p>
            👉 <a href="#">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="#">#novoprojeto</a>
            <a href="#">#nlw</a>
            <a href="#">#rocketseat</a>
          </p>
        </section>

        <form>
          <label>Deixe seu feedback</label>

          <textarea placeholder='Escreva um comentario...' />

          <footer>
            <button>Publicar</button>
          </footer>
        </form>

        <section className={styles.comments}>
          <Comments />
        </section>

      </main>
    </article>
  )
}