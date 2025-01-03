import { useLocation } from 'react-router'
import styles from './Link.module.css'

function Link({ name, href }) {
  const local = useLocation();

  return (
    <a className={`${styles.button} ${local.pathname === href ? styles.buttonPath : ''}`} href={href} >{name}</a>
  )
}

export default Link