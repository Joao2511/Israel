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
        <div className="mt-30 px-16">
            <div>
                <div className="flex border-b border-[#1C1C21] pb-12">
                    <div className="w-2/3">
                        <p className="text-gray-300 text-lg">SERVIÇOS</p>
                        <div className="flex itemns-center">
                            <h1 className="text-4xl md:text-5xl">
                                MEUS SERVIÇOS DE FOTOGRAFIA
                            </h1>
                        </div>
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


                <div className="w-full mt-14">
                    <div className="flex">
                        <div className="w-1/2">
                            <h1 className="text-4xl mb-4 text-[#797C86]">EVENTOS</h1>
                            <p className="text-[#797C86] mb-6">
                                Our event photography service is dedicated to capturing the magic of your special occasions.
                                Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment.
                                We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.
                            </p>
                            <p className="mb-4 text-white font-semibold">SERVIÇOS EM ALTA</p>
                            <div>
                                {servico.map((item, index) => (
                                    <div key={index} className="border rounded-xl p-4 mb-2 text-gray-300">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-1/2 flex justify-end">
                            <img src={Teste} alt="Evento Fotográfico" className="rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
