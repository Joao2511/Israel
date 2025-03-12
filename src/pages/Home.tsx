import Shape from "../assets/Shape.png";
import Fotos from "../assets/Fotos.png";

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
      <div className="w-full flex flex-col md:flex-row min-h-[400px] md:min-h-[500px]">

        {/* Coluna 1: Texto */}
        <div className="w-full md:w-1/3 flex justify-center items-center p-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex flex-col break-words">
            <span className="text-base sm:text-lg md:text-xl text-stone-500">
              Fotografias impressionantes de
            </span>
            ISRAEL CEDRAZ
          </h1>
        </div>

        {/* Coluna 2: Imagem Shape */}
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <img
            src={Shape}
            alt="Shape"
            className="w-[500px] h-auto"
          />
        </div>

        {/* Coluna 3: Chamada para ação */}
        <div className="w-full md:w-1/3 flex justify-center items-center p-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl break-words">
            VAMOS ➡️ <br />
            TRABALHAR JUNTOS
          </h1>
        </div>
      </div>

      {/* Lista de Itens */}
      <div className="flex w-full justify-center bg-[#0E0E10] gap-2 md:gap-6 h-auto md:h-[50px] items-center text-center text-xs md:text-base px-2 py-4 md:py-0 flex-wrap">
        {itens.map((item, index) => (
          <div key={index} className="flex m-1 md:m-0 break-words">
            {item}
          </div>
        ))}
      </div>

      {/* Imagem Fotos */}
      <div className="w-full px-4 md:px-16">
        <img src={Fotos} alt="Fotos" className="w-full object-cover" />
      </div>
    </>
  );
}