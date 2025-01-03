import { useCategories } from '../../hooks/categories'
import styles from './FormList.module.css'

function FormList({ label, placeholder }) {
  const { categories } = useCategories();

  return (
    <div className={styles.formList}>
      <label>{label}</label>
      <select defaultValue="">
        <option value="" disabled hidden>{placeholder}</option>
        {categories.map((category) => {
          return <option key={category.id} value={category.id}>{category.name}</option>
        })}

      </select>
    </div>
  )
}

export default FormList