import styles from './Button.module.css'

function Button({img, text}) {
  return (
    <button className={styles.button}>
      <img src={img} alt={text} />
      <p>{text}</p>
    </button>
  )
}

export default Button