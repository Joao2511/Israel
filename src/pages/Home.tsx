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
      <div className="w-full flex flex-col lg:flex-row px-4 md:px-16 flex-wrap">

        {/* Coluna 1: Texto (esquerda em telas maiores, topo em telas pequenas) */}
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 flex justify-start lg:justify-start items-center mt-8 lg:mt-0">
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl flex flex-col break-words font-semibold">
            <span className="text-lg sm:text-lg md:text-xl text-stone-500">
              Fotografias impressionantes de
            </span>
            ISRAEL CEDRAZ
          </h1>
        </div>

        {/* Coluna 2: Imagem Shape (escondida em telas pequenas) */}
        <div className="w-full hidden xl:flex xl:w-1/3 justify-center items-center">
          <img
            src={Shape}
            alt="Shape"
            className="w-[360px] h-auto"
          />
        </div>

        {/* Coluna 3: Chamada para ação (direita em telas maiores, abaixo em telas pequenas) */}
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 flex flex-col justify-center items-start lg:items-end xl:items-start mt-6 mb-12 lg:mt-0 lg:mb-0">
          {/* Div 1: "VAMOS TRABALHAR" */}
          <div className='flex'>
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">VAMOS TRABALHAR</h1>
          </div>

          {/* Div 2: "JUNTOS" com o botão */}
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
        </div>
      </div>

      {/* Lista de Itens com Marquee */}
      <div className="w-full overflow-hidden bg-[#0E0E10] py-4">
        <div className="animate-marquee whitespace-nowrap">
          {/* Duplicar os itens para criar um loop contínuo */}
          {[...itens, ...itens, ...itens, ...itens].map((item, index) => (
            <span
              key={index}
              className="inline-block text-xs md:text-base px-4 md:px-6"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Imagem Fotos */}
      <div className="w-full px-4 md:px-16">
        {/* Imagem para telas maiores (escondida em celular) */}
        <img src={Fotos} alt="Fotos" className="w-full object-cover hidden md:block" />

        {/* Imagem para telas de celular (escondida em telas maiores) */}
        <img src={FotosCel} alt="Fotos Celular" className="w-full h-full block md:hidden" />
      </div>

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