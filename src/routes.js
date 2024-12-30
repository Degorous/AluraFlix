import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "./pages/Inicio";
import PaginaBase from "./pages/PaginaBase";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaBase />}>
          <Route index element={<Inicio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes