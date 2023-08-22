import { Container, GlobalStyle } from './styles'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Home />
      </Container>
      <Footer />
    </>
  )
}

export default App
