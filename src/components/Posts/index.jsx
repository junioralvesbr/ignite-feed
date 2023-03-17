import Avatar from '../Avatar'
import Comments from '../Comments'
import styles from './styles.module.scss'

export default function Posts({ id, author, content, links, publishedAt }) {
  return (
    <article className={styles.posts}>

      <header className={styles.header}>
        <div className={styles.profile}>
          <Avatar hasBorder src={author.avatar} />
          <div>
            <h3>{author.name}</h3>
            <span>{author.role}</span>
          </div>
        </div>
        <time title="15 de março de 2023" dateTime='2023-15-03'>
          Públicado a 1h
        </time>
      </header>

      <main>
        <section>
          {content?.map(item => (
            item.type === "paragraph" ?
              <p>{item.post}</p>
              :
              <p>👉 <a href="#">{item.link}</a></p>
          ))}

          <p>
            {links?.map(item => (
              <a href="#">{item}</a>
            ))}
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