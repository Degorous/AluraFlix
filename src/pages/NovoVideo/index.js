import Form from '../../componentes/Form'
import FormButton from '../../componentes/FormButton'
import styles from './NovoVideo.module.css'

function NovoVideo() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Novo Video</h1>
        <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO VÍDEO</p>
      </div>
      <div className={styles.form}>
        <h2>Criar Card</h2>
        <Form />
        <div className={styles.formButton}>
          <FormButton name="GUARDAR" />
          <FormButton name="LIMPAR" />
        </div>
      </div>
    </div>
  )
}

export default NovoVideo