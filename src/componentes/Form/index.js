import { useState } from 'react'
import FormButton from '../FormButton'
import FormList from '../FormList'
import TextField from '../TextField'
import styles from './Form.module.css'
import { createVideo } from '../../API/api'
import { useNavigate } from 'react-router'
import { editVideo } from '../../hooks/editVideo'

function Form({ video }) {

  const [formData, setFormData] = useState(
    {
      title: video ? video.title : '',
      category: video ? video.category_id : '',
      url: video ? video.url : ''
    }
  )

  let navigate = useNavigate()

  async function onSubmit(event) {
    event.preventDefault()

    video ?
      await editVideo({ id: video.id, url: formData.url, title: formData.title })
      : await createVideo(formData.url, formData.title, formData.category)

    navigate('/')
  }

  return (
    <section>
      <form className={styles.container} onSubmit={onSubmit}>
        <div className={styles.form}>
          <div className={styles.fields}>
            <TextField
              label="Título"
              placeholder="Digite um título"
              value={formData.title}
              onChange={(event) => setFormData({ ...formData, title: event.target.value })}
            />
            {!video && (<FormList
              label="Categoria"
              placeholder="Escolha uma categoria"
              value={formData.category}
              onChange={(event) => setFormData({ ...formData, category: event.target.value })}
            />)}
          </div>
          <div className={styles.fields} >
            <TextField
              label="Url"
              placeholder="https://www.youtube.com/embed/exemplo123"
              value={formData.url}
              onChange={(event) => setFormData({ ...formData, url: event.target.value })}
            />
          </div>
        </div>
        <div className={styles.formButton}>
          <FormButton name="GUARDAR" />
        </div>
      </form>
    </section>
  )
}

export default Form