import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import BarraSuperior from './container/BarraSuperior'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <BarraSuperior />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
