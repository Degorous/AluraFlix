import styles from './Video.module.css'
import Button from '../Button'

function Video({ url, title, id, onDelete, onEdit }) {

  return (
    <div className={styles.container}>
      <div className={styles.video}>
        <iframe
          width="100%"
          height="100%"
          src={url}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </div>
      <div className={styles.buttons}>
        <Button text='DELETAR' img='./images/delete.png' onClick={(event) => onDelete(event, id)} />
        <Button text='EDITAR' img='./images/edit.png' onClick={(event) => onEdit(event, id)} />
      </div>
    </div>
  )
}

export default Video