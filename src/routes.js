import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "./pages/Inicio";
import PaginaBase from "./pages/PaginaBase";
import NovoVideo from "./pages/NovoVideo";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="novo-video" element={<NovoVideo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes