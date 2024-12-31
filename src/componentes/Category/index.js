import Video from '../Video'
import styles from './Category.module.css'

function Category({videos, categories, background}) { 
  return(
    <div className={styles.container}>
      {categories.map((category) => {
        return <div className={styles.main}>
          <h2 style={{background: category.background}} className={styles.category}>{category.name}</h2>

          <div className={styles.videos}>
            {videos.map((video) => 
              {if (video.category_id === category.id)
                return <Video
                  key={video.id}
                  url={video.url}
                  title={video.title}
                  />
              })
            }   
          </div>
        </div>
      })}
    </div>
  )
}

export default Category