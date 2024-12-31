import Banner from "../../componentes/Banner"
import Category from "../../componentes/Category"

const categories = {
  "categories": [
    {
      "id": 1,
      "name": "League of Legends",
      "background": "#BE9709"
    },
    {
      "id": 2,
      "name": "Dota 2",
      "background": "#AB2004"
    }
  ]
}

const video = {
    "videos": [
    {
      "id": 1,
      "url": "https://www.youtube.com/embed/DNez-aVRits",
      "title": "LL STYLISH | GET PRIO OR DIE TRYING!",
      "category_id": 1
    },
    {
      "id": 2,
      "url": "https://www.youtube.com/embed/fLGij9KQN6E",
      "title": "LL STYLISH | BEST OF NOVEMBER 2024",
      "category_id": 1
    },
    {
      "id": 4,
      "url": "https://www.youtube.com/embed/_pvqMXBU30w",
      "title": "They Never Saw It Coming",
      "category_id": 2
    }
  ]
}

function Inicio() {
  return (
    <>
      <Banner />
      <Category videos={video.videos} categories={categories.categories} background={categories.background} />
    </>
  )
}

export default Inicio