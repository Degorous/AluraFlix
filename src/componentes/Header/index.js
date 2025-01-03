import Link from '../Link';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src='./images/logo.svg' alt='Logo Aluraflix' />
      <div className={styles.buttons}>
        <Link name='Home' href='/' />
        <Link name='Novo Vídeo' href='/novo-video' />
      </div>
    </div>
  )
}

export default Header