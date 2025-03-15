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
      <div className="w-full flex flex-col md:flex-row px-4 md:px-16 flex-wrap">

        {/* Coluna 1: Texto */}
        <div className="w-full md:w-1/3 flex justify-start md:justify-start items-center mt-8 md:mt-0">
          <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl flex flex-col break-words font-semibold">
            <span className="text-lg sm:text-lg md:text-xl text-stone-500">
              Fotografias impressionantes de
            </span>
            ISRAEL CEDRAZ
          </h1>
        </div>

        {/* Coluna 2: Imagem Shape (escondida em telas pequenas) */}
        <div className="w-full hidden md:flex md:w-1/3 justify-center items-center">
          <img
            src={Shape}
            alt="Shape"
            className="w-[360px] h-auto"
          />
        </div>

        {/* Coluna 3: Chamada para ação */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-start mt-6 mb-12 md:mt-0 md:mb-0">

          <div className='flex items-center'>
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">VAMOS TRABALHAR</h1>
          </div>
          <div className='flex text-xl mt-0 md:mt-2 md:4 sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>
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

      {/* Lista de Itens */}
      <div className="flex w-full justify-center bg-[#0E0E10] gap-2 md:gap-6 items-center text-center text-xs md:text-base px-2 py-4 flex-wrap">
        {itens.map((item, index) => (
          <div
            key={index}
            className="m-1 break-words whitespace-normal px-2 text-center"
          >
            {item}
          </div>
        ))}
      </div>
        


      {/* Imagem Fotos */}
      <div className="w-full px-4 md:px-16 ">
        {/* Imagem para telas maiores (escondida em celular) */}
        <img src={Fotos} alt="Fotos" className="w-full object-cover hidden md:block" />

        {/* Imagem para telas de celular (escondida em telas maiores) */}
        <img src={FotosCel} alt="Fotos Celular" className="w-full h-full block md:hidden" />
      </div>
    </>
  );
}