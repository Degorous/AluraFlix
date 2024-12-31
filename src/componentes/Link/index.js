import styles from './Link.module.css'

function Link({name}) {
  return (
    <a className={styles.button} href='/' >{name}</a>
  )
}

export default Link