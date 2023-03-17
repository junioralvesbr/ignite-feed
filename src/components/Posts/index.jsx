import { format, formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Avatar from '../Avatar'
import Comments from '../Comments'
import styles from './styles.module.scss'

export default function Posts({ id, author, content, links, publishedAt }) {
  const date = format(publishedAt, "MM/dd/yyyy hh:mm")
  console.log(date)
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
        <time
          title={format(publishedAt, "dd 'de' LLLL 'de' yyyy", { locale: ptBR })}
          dateTime={format(publishedAt, "MM/dd/yyyy")}
        >
          {formatDistance(Date.now(), publishedAt, { addSuffix: true, locale: ptBR })}
        </time>
      </header>

      <main>
        <section>
          {content?.map((item, index) => (
            item.type === "paragraph" ?
              <p key={index}>{item.post}</p>
              :
              <p key={index}>👉 <a href="#">{item.link}</a></p>
          ))}

          <p>
            {links?.map((item, index) => (
              <a href="#" key={index}>{item}</a>
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