import styles from './TextArea.module.css'

function TextArea({ label, placeholder, value, onChange }) {
  return (
    <div className={styles.area}>
      <label>{label}</label>
      <textarea placeholder={placeholder} required value={value} onChange={onChange} />
    </div>
  )
}

export default TextArea