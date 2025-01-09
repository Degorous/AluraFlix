import styles from './Button.module.css'

function Button({ img, text, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src={img} alt={text} />
      <p>{text}</p>
    </button>
  )
}

export default Button