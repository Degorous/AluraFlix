import { Outlet } from "react-router"
import Header from "../../componentes/Header"
import Footer from "../../componentes/Footer"

function PaginaBase() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default PaginaBase