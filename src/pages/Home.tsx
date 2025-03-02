import Shape from "../assets/Shape.png";
import Fotos from "../assets/Fotos.png"

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
      {/* Seção principal */}
      <div className="w-full relative pt-12 pl-6 md:pl-14 flex flex-col md:flex-row">
        {/* Background Shape */}
        <div className="absolute inset-0 flex justify-center items-center z-[-1]">
          <img
            src={Shape}
            alt="Shape"
            className="w-auto h-full object-contain"
          />
        </div>

        {/* Texto principal */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl flex flex-col">
            <span className="text-base text-stone-500">
              Fotografias brimpressionantes de
            </span>
            ISRAEL CEDRAZ
          </h1>
        </div>

        {/* Chamada para ação */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center pb-10 md:pb-20 justify-center">
          <h1 className="text-3xl md:text-5xl">
            VAMOS ➡️ <br/>
            TRABALHAR JUNTOS
          </h1>
        </div>
      </div>

      {/* Barra de itens */}
      <div className="flex w-full justify-center bg-[#0E0E10] gap-2 md:gap-6 h-[50px] items-center text-center text-xs md:text-base px-2">
        {itens.map((item, index) => (
          <div key={index} className="flex">
            {item}
          </div>
        ))}
      </div>

      {/* Seção de Fotos */}
      <div className="w-full px-16">
        <img src={Fotos} alt="Fotos" className="w-full object-cover" />
      </div>
    </>
  );
}
