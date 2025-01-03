import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <img className={styles.logo} src='./images/logo.svg' alt='Logo Aluraflix' />
      <p>Desenvolvido por Erick</p>
    </div>
  )
}

export default Footer