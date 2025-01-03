import styles from './TextArea.module.css'

function TextArea({ label, placeholder }) {
  return (
    <div className={styles.area}>
      <label>{label}</label>
      <textarea placeholder={placeholder} />
    </div>
  )
}

export default TextArea