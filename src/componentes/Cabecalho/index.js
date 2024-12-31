import Link from '../Link';
import styles from './Cabecalho.module.css';

function Cabecalho() {
  return (
    <div className={styles.cabecalho}>
      <img className={styles.logo} src='./images/logo.svg' alt='Logo Aluraflix' />
      <div className={styles.buttons}>
        <Link name='Home' />
        <Link name='Novo Vídeo' />
      </div>
    </div>
  )
}

export default Cabecalho