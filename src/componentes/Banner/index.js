import styles from './Banner.module.css'

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}/>
      <div className={styles.text}>
        <h1>SEO com React</h1>
        <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!    
        </p>
      </div>
      <img className={styles.image} src='./images/player.png' alt='player' />
    </div>
  )
}

export default Banner