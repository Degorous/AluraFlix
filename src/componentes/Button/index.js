import styles from './Button.module.css'

function Button({name}) {
  return (
    <a className={styles.button} href='/' >{name}</a>
  )
}

export default Button