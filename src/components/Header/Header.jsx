import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/simbol.svg" alt="Simbolo do header" />
      <span>Ignite Feed</span>
    </header>
  )
}