import { PencilSimpleLine } from '@phosphor-icons/react'
import styles from './styles.module.scss'

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <img src="/rectangle.svg" alt="backgroudn image" />

      <div className={styles.profile}>
        <img src="https://avatars.githubusercontent.com/junioralvesbr" alt="foto de avatar" />
        <h2>Leslie Alexander</h2>
        <span>UI Designer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}