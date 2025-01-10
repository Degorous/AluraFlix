import Banner from "../../componentes/Banner"
import Category from "../../componentes/Category"
import { useCategories } from "../../hooks/categories"
import { useVideos } from "../../hooks/videos"
import { deleteVideo } from '../../API/api'
import ModalEdit from "../../componentes/ModalEdit"
import { useState } from "react"
import { getVideo } from "../../hooks/editVideo"

function Inicio() {
  const { categories } = useCategories();
  const { videos, reload } = useVideos();
  const [video, setVideo] = useState(null);

  async function onDelete(event, id) {
    event.preventDefault()
    await deleteVideo(id)
    reload()
  }

  async function onEdit(event, id) {
    event.preventDefault()
    const videoEdit = await getVideo(id)
    setVideo(videoEdit)
  }

  return (
    <>
      <Banner />
      <Category videos={videos} categories={categories} onDelete={onDelete} onEdit={onEdit} />
      <ModalEdit video={video} onClose={() => setVideo(null)} />
    </>
  )
}

export default Inicio