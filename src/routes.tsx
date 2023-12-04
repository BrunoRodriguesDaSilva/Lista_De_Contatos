import { Routes, Route } from 'react-router-dom'
import PaginaInicio from './pages/Inicio'
import PaginaSobre from './pages/Sobre'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<PaginaInicio />} />
    <Route path="/Sobre" element={<PaginaSobre />} />
  </Routes>
)

export default Rotas
