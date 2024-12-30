import Button from '../Button';
import styles from './Cabecalho.module.css';

function Cabecalho() {
  return (
    <div className={styles.cabecalho}>
      <img className={styles.logo} src='./images/logo.svg' alt='Logo Aluraflix' />
      <div className={styles.buttons}>
        <Button name='Home' />
        <Button name='Novo Vídeo' />
      </div>
    </div>
  )
}

export default Cabecalho