import { motion } from "framer-motion"; // Importe o Framer Motion
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Shape from "../assets/Shape.png";
import Fotos from "../assets/Fotos.png";
import FotosCel from "../assets/FotosCelular.png";

export default function Home() {
  const itens = [
    "✴ VÍDEOS DE EVENTOS",
    "✴ VÍDEOS COMERCIAL",
    "✴ VÍDEOS DE CASAMENTOS",
    "✴ VÍDEOS DE PAISAGEM",
    "✴ VÍDEOS DE MARCA",
    "✴ ENSAIOS DE CASAIS",
  ];

  return (
    <>
      {/* Seção Superior */}
      <motion.div
        className="w-full flex flex-col lg:flex-row px-4 md:px-16 flex-wrap"
        initial={{ opacity: 0, y: 50 }} // Animação para o container principal
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Coluna 1: Texto */}
        <motion.div
          className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 flex justify-start lg:justify-start items-center mt-8 lg:mt-0"
          initial={{ opacity: 0 }} // Animação para o texto
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl flex flex-col break-words font-semibold">
            <span className="text-lg sm:text-lg md:text-xl text-stone-500">
              Fotografias impressionantes de
            </span>
            ISRAEL CEDRAZ
          </h1>
        </motion.div>

        {/* Coluna 2: Imagem Shape */}
        <motion.div
          className="w-full hidden xl:flex xl:w-1/3 justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={Shape}
            alt="Shape"
            className="w-[360px] h-auto"
            draggable="false"  // Impede que a imagem seja arrastada
            loading="lazy"     // Otimização de carregamento
            style={{
              pointerEvents: 'none', // Desativa todos os eventos de ponteiro
              userSelect: 'none',   // Impede seleção de texto
            }}
          />
        </motion.div>

        {/* Coluna 3: Chamada para ação */}
        <motion.div
          className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 flex flex-col justify-center items-start lg:items-end xl:items-start mt-6 mb-12 lg:mt-0 lg:mb-0"
          initial={{ opacity: 0 }} // Animação para a chamada de ação
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className='flex'>
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">VAMOS TRABALHAR</h1>
          </div>
          <div className='flex items-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-0 md:mt-2 md:4 font-semibold'>
            <h1>JUNTOS</h1>
            <button
              className="bg-[#4A2CED] flex items-center px-6 md:py-4 md:px-8 lg:py-2 lg:px-10 rounded-4xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ml-4"
              style={{
                boxShadow: "inset 3px 3px 5px rgba(0, 11, 109, 0.5), inset -3px -3px 5px rgba(255, 255, 255, 0.3)",
                borderRadius: "24px",
                filter: "drop-shadow(0px 4px 10px rgba(74, 44, 237, 0.5))",
              }}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ transform: "rotate(320deg)", fontSize: "clamp(18px, 2.5vw, 24px)" }}
              />
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Lista de Itens com Marquee */}
      <motion.div
        className="w-full overflow-hidden bg-[#0E0E10] py-4"
        initial={{ opacity: 0, y: 20 }} // Animação para a lista de itens
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="animate-marquee whitespace-nowrap">
          {[...itens, ...itens, ...itens, ...itens].map((item, index) => (
            <span
              key={index}
              className="inline-block text-xs text-[#D6D0FB] md:text-base px-4 md:px-6"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Imagem Fotos */}
      <motion.div
        className="w-full px-4 md:px-16"
        initial={{ opacity: 0, y: 50 }} // Animação para a seção de imagens
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {/* Imagem para telas maiores */}
        <img src={Fotos} alt="Fotos" className="w-full object-cover hidden md:block" />

        {/* Imagem para telas de celular */}
        <img src={FotosCel} alt="Fotos Celular" className="w-full h-full block md:hidden" />
      </motion.div>

      {/* Estilos CSS para a animação do Marquee */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 60s linear infinite;
          }
        `}
      </style>
    </>
  );
}