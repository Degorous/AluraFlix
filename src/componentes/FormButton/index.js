import styles from './FormButton.module.css'

function FormButton({ name }) {
  return (
    <button className={styles.button}>
      <p>{name}</p>
    </button>
  )
}

export default FormButton