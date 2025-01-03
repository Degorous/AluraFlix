import styles from './Link.module.css'

function Link({ name, href }) {
  return (
    <a className={styles.button} href={href} >{name}</a>
  )
}

export default Link