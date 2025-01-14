import styles from './Banner.module.css'

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.text}>
        <h1>Sobre o projeto</h1>
        <p>Este projeto foi desenvolvido utilizando React e utiliza o json-server para simular o consumo de uma API externa. Na página principal, os usuários podem visualizar todos os vídeos organizados em suas respectivas categorias, proporcionando uma navegação intuitiva. Além disso, na segunda página, é possível adicionar novos vídeos por meio de um formulário simples e funcional.
        </p>
      </div>
      <img className={styles.image} src='./images/noxus.jpg' alt='player' />
    </div>
  )
}

export default Banner