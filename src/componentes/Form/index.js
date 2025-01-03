import FormList from '../FormList'
import TextField from '../TextField'
import styles from './Form.module.css'


function Form() {
  return (
    <section>
      <form className={styles.form}>
        <TextField label="Título" placeholder="Digite um título" />
        <FormList label="Categoria" placeholder="Escolha uma categoria" />
        <TextField label="Imagem" placeholder="Digite o link da image" />
        <TextField label="Vídeo" placeholder="Digite o link do vídeo" />
        <TextField label="Descrição" placeholder="Descrição do vídeo" />
      </form>
    </section>
  )
}

export default Form