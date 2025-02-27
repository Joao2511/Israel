import Home from '../src/pages/Home'
import Header from './components/Header'
import Assinnatura from './components/assinatura'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import Portfolio from './pages/Portfolio'
import Faq from './pages/Faq'
import Depoimentos from './pages/Depoimentos'

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
    </>
  )
}

export default App
