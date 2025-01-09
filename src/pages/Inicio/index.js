import Banner from "../../componentes/Banner"
import Category from "../../componentes/Category"
import { useCategories } from "../../hooks/categories"
import { useVideos } from "../../hooks/videos"
import { deleteVideo } from '../../API/api'

function Inicio() {
  const { categories } = useCategories();
  const { videos, reload } = useVideos();

  async function onDelete(event, id) {
    event.preventDefault()
    await deleteVideo(id)
    reload()
  }

  return (
    <>
      <Banner />
      <Category videos={videos} categories={categories} onDelete={onDelete} />
    </>
  )
}

export default Inicio