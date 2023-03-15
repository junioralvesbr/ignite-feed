import styles from './styles.module.scss'

export default function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt="foto de avatar" />
  )
}