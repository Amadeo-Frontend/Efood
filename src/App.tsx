import { Container, GlobalStyle } from './styles'
import Header from './components/Header'
import Home from './pages/Home'
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Home />
      </Container>
    </>
  )
}

export default App
