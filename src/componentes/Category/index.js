import Video from '../Video'
import styles from './Category.module.css'

function Category({ videos, categories, onDelete }) {

  return (
    <div className={styles.container}>
      {categories.map((category) => {
        return <div className={styles.main} key={category.id}>
          <h2 style={{ background: category.background }} className={styles.category}>{category.name}</h2>

          <div className={styles.videos}>
            {videos.map((video) => {
              if (video.category_id !== category.id) {
                return null
              }

              return <Video
                key={video.id}
                url={video.url}
                title={video.title}
                id={video.id}
                onDelete={onDelete}
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