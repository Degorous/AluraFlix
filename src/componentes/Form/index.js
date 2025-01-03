import FormButton from '../FormButton'
import FormList from '../FormList'
import TextArea from '../TextArea'
import TextField from '../TextField'
import styles from './Form.module.css'


function Form() {
  return (
    <section>
      <form className={styles.container}>
        <div className={styles.form}>
          <div className={styles.fields}>
            <TextField label="Título" placeholder="Digite um título" />
            <FormList label="Categoria" placeholder="Escolha uma categoria" />
          </div>
          <div className={styles.fields} >
            <TextField label="Imagem" placeholder="Digite o link da image" />
            <TextField label="Vídeo" placeholder="Digite o link do vídeo" />
          </div>
          <TextArea label="Descrição" placeholder="Descrição do vídeo" />
        </div>
        <div className={styles.formButton}>
          <FormButton name="GUARDAR" />
          <FormButton name="LIMPAR" />
        </div>
      </form>
    </section>
  )
}

export default Form