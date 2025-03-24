import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Importe o Framer Motion

const Loading = ({ onFinish }: { onFinish: () => void }) => {
  const [isVisible, setIsVisible] = useState(true); // Estado para controlar a visibilidade da tela de loading

  useEffect(() => {
    // Simula o tempo de carregamento do vídeo
    const timer = setTimeout(() => {
      setIsVisible(false); // Inicia a animação de fade-out
      onFinish(); // Chama a função para indicar que o loading terminou
    }, 6100); // 6.1 segundos

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
          initial={{ opacity: 1 }} // Estado inicial: totalmente visível
          animate={{ opacity: 1 }} // Mantém a opacidade em 1 enquanto visível
          exit={{ opacity: 0 }} // Animação de saída: fade-out
          transition={{ duration: 0.5 }} // Duração da animação de fade-out
        >
          <video
            autoPlay
            muted
            playsInline
            onEnded={() => {
              setIsVisible(false); // Inicia a animação de fade-out
              onFinish(); // Finaliza o loading quando o vídeo termina
            }}
            className="w-[652px] h-auto object-cover"
          >
            <source src="/logoAnimada.mp4" type="video/mp4" /> {/* Caminho correto */}
            Seu navegador não suporta o vídeo.
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;