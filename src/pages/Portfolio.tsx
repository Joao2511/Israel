import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Portfolio() {
    const servicos = [
        {
            titulo: "Faces of Resilience",
            descricao: "March 2022",
            imagem: img1,
        },
        {
            titulo: "Nature's Beauty",
            descricao: "April 2022",
            imagem: img2,
        },
        {
            titulo: "Urban Life",
            descricao: "May 2022",
            imagem: img3,
        }
    ];

    return (
        <>
            <div className="px-16 mt-20">
                <div>
                    <div className="w-full flex border-b border-[#1C1C21] pb-10 mb-10">
                        <div className="w-2/3">
                            <p>PORTFÓLIO</p>
                            <h1 className="text-4xl md:text-5xl">DESCUBRA MAIS SOBRE MINHAS FOTOGRAFIAS</h1>
                        </div>
                        <div className="flex justify-end items-center gap-4 w-1/3">
                            <div className="flex items-center p-2 rounded-full border border-gray-700 gap-2">
                                <button className="w-14 h-14 bg-[#232326] rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faChevronLeft} className="text-white text-2xl" />
                                </button>
                                <button className="w-14 h-14 bg-[#232326] rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faChevronRight} className="text-white text-2xl" />
                                </button>
                            </div>
                            <div>
                                <button>Ver todos os serviços</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        {servicos.map((servico, index) => (
                            <div key={index} className="m-4 flex flex-col w-1/3">
                                <img
                                    src={servico.imagem}
                                    alt={servico.titulo}
                                    className="w-full object-cover rounded" // Tamanho fixo para as imagens
                                />
                                <div className="flex justify-between items-center mt-2">
                                    <div className="flex flex-col">
                                        <h2 className="text-lg font-semibold">{servico.titulo}</h2>
                                        <p className="text-gray-600">{servico.descricao}</p>
                                    </div>
                                    <button className="ml-4 text-blue-500">
                                        Ver Projeto
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}