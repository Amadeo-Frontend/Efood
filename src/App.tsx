import { Container, GlobalStyle } from './styles'
import Header from './components/Header'
import Rotas from './routs'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Container>
        <Rotas />
      </Container>
    </BrowserRouter>
  )
}

export default App
