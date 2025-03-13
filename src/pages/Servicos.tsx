import Teste from "../assets/teste.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Servicos() {
    const servico = [
        "✴ Coverage for weddings, parties, corporate functions, and more.",
        "✴ Skilled photographers who know how to seize the moment.",
        "✴ A mix of candid and posed shots for a comprehensive story.",
        "✴ Quick turnaround for you to relive the day's highlights.",
    ];

    return (
        <div className="mt-30 px-6 md:px-16 mb-30">
            <div>
                {/* Seção superior */}
                <div className="flex flex-col md:flex-row border-b border-[#1C1C21] pb-12">
                    <div className="w-full md:w-2/3 mb-6 md:mb-0">
                        <p className="text-gray-300 text-lg text-[#797C86] mb-2">SERVIÇOS</p>
                        <div className="flex items-center">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl">
                                MEUS SERVIÇOS DE FOTOGRAFIA
                            </h1>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 flex justify-start md:justify-end items-center gap-4">
                        <div className="flex items-center p-2 rounded-full border border-[#1C1C21] gap-2">
                            <button className="w-10 h-10 md:w-14 md:h-14 bg-[#232326] rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={faChevronLeft} className="text-white text-xl md:text-2xl" />
                            </button>
                            <button className="w-10 h-10 md:w-14 md:h-14 bg-[#232326] rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={faChevronRight} className="text-white text-xl md:text-2xl" />
                            </button>
                        </div>
                        <div>
                            <button className="px-4 py-2 md:px-6 md:py-4 bg-[#1C1C21] text-white text-sm md:text-lg rounded hover:bg-blue-600 transition">
                                Ver todos os serviços
                            </button>
                        </div>
                    </div>
                </div>

                {/* Seção de conteúdo */}
                <div className="w-full mt-14">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Texto e serviços */}
                        <div className="w-full lg:w-1/2">
                            <h1 className="text-3xl md:text-4xl mb-4 text-[#797C86]">EVENTOS</h1>
                            <p className="text-[#797C86] mb-6">
                                Our event photography service is dedicated to capturing the magic of your special occasions.
                                Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment.
                                We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.
                            </p>
                            <p className="mb-4 text-white text-base text-[#CACACE]">Serviços em alta</p>
                            <div>
                                {servico.map((item, index) => (
                                    <div key={index} className="border rounded-xl p-4 mb-2 text-gray-300">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Imagem */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            <img
                                src={Teste}
                                alt="Evento Fotográfico"
                                className="rounded-lg w-full h-auto max-w-lg lg:max-w-none object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}