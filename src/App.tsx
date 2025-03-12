import Home from '../src/pages/Home'
import Header from './components/Header'
import Assinnatura from './components/assinatura'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import Portfolio from './pages/Portfolio'
import Faq from './pages/Faq'
import Depoimentos from './pages/Depoimentos'
import Footer from './pages/Footer'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Sobre/>
      <Servicos/>
      <Portfolio/>
      <Faq/>
      <Depoimentos/>
      <Footer/>
    </>
  )
}

export default App