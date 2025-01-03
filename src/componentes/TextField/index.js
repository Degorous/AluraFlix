import styles from './TextField.module.css'

function TextField({ label, placeholder }) {
  return (
    <div className={styles.field}>
      <label>{label}</label>
      <input placeholder={placeholder} />
    </div>
  )
}

export default TextField