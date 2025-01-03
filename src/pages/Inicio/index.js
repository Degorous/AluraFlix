import Banner from "../../componentes/Banner"
import Category from "../../componentes/Category"
import { useCategories } from "../../hooks/categories"
import { useVideos } from "../../hooks/videos"

function Inicio() {
  const { categories } = useCategories();
  const { videos } = useVideos();

  return (
    <>
      <Banner />
      <Category videos={videos} categories={categories} />
    </>
  )
}

export default Inicio