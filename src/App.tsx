import React, { useState } from "react";
import Home from '../src/pages/Home';
import Header from './components/Header';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Portfolio from './pages/Portfolio';
import Faq from './pages/Faq';
import Depoimentos from './pages/Depoimentos';
import Footer from './pages/Footer';
import Loading from './components/Loading'; // Importe o componente de loading

function App() {
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar o loading

  // Bloqueia o scroll enquanto o loading estiver ativo
  React.useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden"; // Bloqueia o scroll
    } else {
      document.body.style.overflow = "auto"; // Libera o scroll
    }
  }, [isLoading]);

  return (
    <>
      {/* Tela de Loading */}
      <Loading onFinish={() => setIsLoading(false)} />

      {/* Conteúdo Principal */}
      {!isLoading && (
        <>
          <Header />
          <Home />
          <Sobre />
          <Servicos />
          <Portfolio />
          <Faq />
          <Depoimentos />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;