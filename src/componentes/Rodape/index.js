import styles from './Rodape.module.css'

function Rodape() {
  return (
    <div className={styles.rodape}>
      <img className={styles.logo} src='./images/logo.svg' alt='Logo Aluraflix' />
      <p>Desenvolvido por Erick</p>
    </div>
  )
}

export default Rodape